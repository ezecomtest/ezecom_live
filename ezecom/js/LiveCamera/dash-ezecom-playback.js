(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("clappr"));
    else if (typeof define === 'function' && define.amd)
        define(["clappr"], factory);
    else if (typeof exports === 'object')
        exports["DashShakaPlayback"] = factory(require("clappr"));
    else
        root["DashShakaPlayback"] = factory(root["Clappr"]);
})(this, function (__WEBPACK_EXTERNAL_MODULE_1__) {
    return /******/ (function (modules) { // webpackBootstrap
        /******/ // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/ // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/
            if (installedModules[moduleId]) {
                /******/
                return installedModules[moduleId].exports;
                /******/
            }
            /******/ // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}
                /******/
            };
            /******/
            /******/ // Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ // Flag the module as loaded
            /******/
            module.l = true;
            /******/
            /******/ // Return the exports of the module
            /******/
            return module.exports;
            /******/
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/ // define getter function for harmony exports
        /******/
        __webpack_require__.d = function (exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
                /******/
                Object.defineProperty(exports, name, {
                    /******/
                    configurable: false,
                    /******/
                    enumerable: true,
                    /******/
                    get: getter
                    /******/
                });
                /******/
            }
            /******/
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function (module) {
            /******/
            var getter = module && module.__esModule ?
                /******/
                function getDefault() {
                    return module['default'];
                } :
                /******/
                function getModuleExports() {
                    return module;
                };
            /******/
            __webpack_require__.d(getter, 'a', getter);
            /******/
            return getter;
            /******/
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/
        __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ // __webpack_public_path__
        /******/
        __webpack_require__.p = "";
        /******/
        /******/ // Load entry module and return exports
        /******/
        return __webpack_require__(__webpack_require__.s = 0);
        /******/
    })
    /************************************************************************/
    /******/
    ([
/* 0 */
/***/
        (function (module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _get = function get(object, property, receiver) {
                if (object === null) object = Function.prototype;
                var desc = Object.getOwnPropertyDescriptor(object, property);
                if (desc === undefined) {
                    var parent = Object.getPrototypeOf(object);
                    if (parent === null) {
                        return undefined;
                    } else {
                        return get(parent, property, receiver);
                    }
                } else if ("value" in desc) {
                    return desc.value;
                } else {
                    var getter = desc.get;
                    if (getter === undefined) {
                        return undefined;
                    }
                    return getter.call(receiver);
                }
            };

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _clappr = __webpack_require__(1);

            var _shakaPlayer = __webpack_require__(2);

            var _shakaPlayer2 = _interopRequireDefault(_shakaPlayer);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var SEND_STATS_INTERVAL_MS = 30 * 1e3;
            var DEFAULT_LEVEL_AUTO = -1;

            var DashShakaPlayback = function (_HTML5Video) {
                _inherits(DashShakaPlayback, _HTML5Video);

                _createClass(DashShakaPlayback, [{
                    key: 'name',
                    get: function get() {
                        return 'dash_shaka_playback';
                    }
  }, {
                    key: 'shakaVersion',
                    get: function get() {
                        return _shakaPlayer2.default.player.Player.version;
                    }
  }, {
                    key: 'shakaPlayerInstance',
                    get: function get() {
                        return this._player;
                    }
  }, {
                    key: 'levels',
                    get: function get() {
                        return this._levels;
                    }
  }, {
                    key: 'currentLevel',
                    set: function set(id) {
                        var _this2 = this;

                        this._currentLevelId = id;
                        var isAuto = this._currentLevelId === DEFAULT_LEVEL_AUTO;

                        this.trigger(_clappr.Events.PLAYBACK_LEVEL_SWITCH_START);
                        if (!isAuto) {
                            this._player.configure({
                                abr: {
                                    enabled: false
                                }
                            });
                            this._pendingAdaptationEvent = true;
                            this.selectTrack(this.videoTracks.filter(function (t) {
                                return t.id === _this2._currentLevelId;
                            })[0]);
                        } else {
                            this._player.configure({
                                abr: {
                                    enabled: true
                                }
                            });
                            this.trigger(_clappr.Events.PLAYBACK_LEVEL_SWITCH_END);
                        }
                    },
                    get: function get() {
                        return this._currentLevelId || DEFAULT_LEVEL_AUTO;
                    }
  }], [{
                    key: 'canPlay',
                    value: function canPlay(resource) {
                        var mimeType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

                        _shakaPlayer2.default.polyfill.installAll();
                        var browserSupported = _shakaPlayer2.default.Player.isBrowserSupported();
                        var resourceParts = resource.split('?')[0].match(/.*\.(.*)$/) || [];
                        return browserSupported && (resourceParts[1] === 'mpd' || mimeType.indexOf('application/dash+xml') > -1);
                    }
  }, {
                    key: 'Events',
                    get: function get() {
                        return {
                            SHAKA_READY: 'shaka:ready'
                        };
                    }
  }]);

                function DashShakaPlayback(options) {
                    _classCallCheck(this, DashShakaPlayback);

                    var _this = _possibleConstructorReturn(this, (DashShakaPlayback.__proto__ || Object.getPrototypeOf(DashShakaPlayback)).call(this, options));

                    _this._levels = [];
                    _this._pendingAdaptationEvent = false;

                    options.autoPlay && _this.play();
                    return _this;
                }

                _createClass(DashShakaPlayback, [{
                    key: 'play',
                    value: function play() {
                        if (!this._player) {
                            this._setup();
                        }

                        if (!this.isReady) {
                            this.once(DashShakaPlayback.Events.SHAKA_READY, this.play);
                            return;
                        }

                        this._stopped = false;
                        this._src = this.el.src;
                        _get(DashShakaPlayback.prototype.__proto__ || Object.getPrototypeOf(DashShakaPlayback.prototype), 'play', this).call(this);
                    }

                    // skipping setup `setupSrc` on tag video

  }, {
                    key: 'setupSrc',
                    value: function setupSrc() {}

                    // skipping ready event on video tag in favor of ready on shaka

  }, {
                    key: '_ready',
                    value: function _ready() {
                        this._isShakaReadyState = true;
                        this.trigger(DashShakaPlayback.Events.SHAKA_READY);
                        this.trigger(_clappr.Events.PLAYBACK_READY, this.name);
                    }
  }, {
                    key: 'error',


                    // skipping error handling on video tag in favor of error on shaka
                    value: function error(event) {
                        _clappr.Log.error('an error was raised by the video tag', event, this.el.error);
                    }
  }, {
                    key: 'isHighDefinitionInUse',
                    value: function isHighDefinitionInUse() {
                        return !!this.highDefinition;
                    }
  }, {
                    key: 'stop',
                    value: function stop() {
                        var _this3 = this;

                        clearInterval(this.sendStatsId);
                        this._stopped = true;

                        if (this._player) {
                            this._sendStats();

                            this._player.unload().then(function () {
                                _get(DashShakaPlayback.prototype.__proto__ || Object.getPrototypeOf(DashShakaPlayback.prototype), 'stop', _this3).call(_this3);
                                _this3._player = null;
                                _this3._isShakaReadyState = false;
                            }).catch(function () {
                                _clappr.Log.error('shaka could not be unloaded');
                            });
                        } else {
                            _get(DashShakaPlayback.prototype.__proto__ || Object.getPrototypeOf(DashShakaPlayback.prototype), 'stop', this).call(this);
                        }
                    }
  }, {
                    key: 'getPlaybackType',
                    value: function getPlaybackType() {
                        return (this._player && this._player.isLive() ? 'live' : 'vod') || '';
                    }
  }, {
                    key: 'selectTrack',
                    value: function selectTrack(track) {
                        this._player.selectTrack(track);
                        this._onAdaptation();
                    }

                    /**
                     * @override
                     */

  }, {
                    key: '_enableShakaTextTrack',
                    value: function _enableShakaTextTrack(isEnable) {
                        // Shaka player use only one TextTrack object with video element to handle all text tracks
                        // It must be enabled or disabled in addition to call selectTextTrack()
                        if (!this.el.textTracks) {
                            return;
                        }

                        this._shakaTTVisible = isEnable;

                        Array.from(this.el.textTracks).filter(function (track) {
                            return track.kind === 'subtitles';
                        }).forEach(function (track) {
                            return track.mode = isEnable === true ? 'showing' : 'hidden';
                        });
                    }
  }, {
                    key: '_checkForClosedCaptions',
                    value: function _checkForClosedCaptions() {
                        if (this._ccIsSetup) {
                            return;
                        }

                        if (this.hasClosedCaptionsTracks) {
                            this.trigger(_clappr.Events.PLAYBACK_SUBTITLE_AVAILABLE);
                            var trackId = this.closedCaptionsTrackId;
                            this.closedCaptionsTrackId = trackId;
                        }
                        this._ccIsSetup = true;
                    }
  }, {
                    key: 'destroy',
                    value: function destroy() {
                        var _this4 = this;

                        clearInterval(this.sendStatsId);

                        if (this._player) {
                            this._player.destroy().then(function () {
                                return _this4._destroy();
                            }).catch(function () {
                                _this4._destroy();
                                _clappr.Log.error('shaka could not be destroyed');
                            });
                        } else {
                            this._destroy();
                        }
                    }
  }, {
                    key: '_setup',
                    value: function _setup() {
                        var _this5 = this;

                        this._isShakaReadyState = false;
                        this._ccIsSetup = false;
                        this._player = this._createPlayer();
                        this._options.shakaConfiguration && this._player.configure(this._options.shakaConfiguration);
                        this._options.shakaOnBeforeLoad && this._options.shakaOnBeforeLoad(this._player);

                        var playerLoaded = this._player.load(this._options.src);
                        playerLoaded.then(function () {
                            return _this5._loaded();
                        }).catch(function (e) {
                            return _this5._setupError(e);
                        });
                    }
  }, {
                    key: '_createPlayer',
                    value: function _createPlayer() {
                        var player = new _shakaPlayer2.default.Player(this.el);
                        player.addEventListener('error', this._onError.bind(this));
                        player.addEventListener('adaptation', this._onAdaptation.bind(this));
                        player.addEventListener('buffering', this._onBuffering.bind(this));
                        return player;
                    }
  }, {
                    key: '_onBuffering',
                    value: function _onBuffering(e) {
                        if (this._stopped) return;
                        var event = e.buffering ? _clappr.Events.PLAYBACK_BUFFERING : _clappr.Events.PLAYBACK_BUFFERFULL;
                        this.trigger(event);
                    }
  }, {
                    key: '_loaded',
                    value: function _loaded() {
                        this._ready();
                        this._startToSendStats();
                        this._fillLevels();
                        this._checkForClosedCaptions();
                    }
  }, {
                    key: '_fillLevels',
                    value: function _fillLevels() {
                        if (this._levels.length === 0) {
                            this._levels = this.videoTracks.map(function (videoTrack) {
                                return {
                                    id: videoTrack.id,
                                    label: videoTrack.height + 'p'
                                };
                            }).reverse();
                            this.trigger(_clappr.Events.PLAYBACK_LEVELS_AVAILABLE, this.levels);
                        }
                    }
  }, {
                    key: '_startToSendStats',
                    value: function _startToSendStats() {
                        var _this6 = this;

                        var intervalMs = this._options.shakaSendStatsInterval || SEND_STATS_INTERVAL_MS;
                        this.sendStatsId = setInterval(function () {
                            return _this6._sendStats();
                        }, intervalMs);
                    }
  }, {
                    key: '_sendStats',
                    value: function _sendStats() {
                        this.trigger(_clappr.Events.PLAYBACK_STATS_ADD, this._player.getStats());
                    }
  }, {
                    key: '_setupError',
                    value: function _setupError(err) {
                        this._onError(err);
                    }
  }, {
                    key: '_onError',
                    value: function _onError(err) {
                        _clappr.Log.error('Shaka error event:', err);
                        this.trigger(_clappr.Events.PLAYBACK_ERROR, err, this.name);
                    }
  }, {
                    key: '_onAdaptation',
                    value: function _onAdaptation() {
                        var activeVideo = this.videoTracks.filter(function (t) {
                            return t.active === true;
                        })[0];

                        this._fillLevels();

                        // update stats that may have changed before we trigger event
                        // so that user can rely on stats data when handling event
                        this._sendStats();

                        if (this._pendingAdaptationEvent_) {
                            this.trigger(_clappr.Events.PLAYBACK_LEVEL_SWITCH_END);
                            this._pendingAdaptationEvent = false;
                        }

                        _clappr.Log.debug('an adaptation has happened:', activeVideo);
                        this.highDefinition = activeVideo.height >= 720;
                        this.trigger(_clappr.Events.PLAYBACK_HIGHDEFINITIONUPDATE, this.highDefinition);
                        this.trigger(_clappr.Events.PLAYBACK_BITRATE, {
                            bandwidth: activeVideo.bandwidth,
                            width: activeVideo.width,
                            height: activeVideo.height,
                            level: activeVideo.id
                        });
                    }
  }, {
                    key: '_destroy',
                    value: function _destroy() {
                        _get(DashShakaPlayback.prototype.__proto__ || Object.getPrototypeOf(DashShakaPlayback.prototype), 'destroy', this).call(this);
                        this._isShakaReadyState = false;
                        _clappr.Log.debug('shaka was destroyed');
                    }
  }, {
                    key: 'isReady',
                    get: function get() {
                        return this._isShakaReadyState;
                    }
  }, {
                    key: 'textTracks',
                    get: function get() {
                        return this._player && this._player.getTextTracks();
                    }
  }, {
                    key: 'audioTracks',
                    get: function get() {
                        return this._player && this._player.getVariantTracks().filter(function (t) {
                            return t.mimeType.startsWith('audio/');
                        });
                    }
  }, {
                    key: 'videoTracks',
                    get: function get() {
                        return this._player && this._player.getVariantTracks().filter(function (t) {
                            return t.mimeType.startsWith('video/');
                        });
                    }
  }, {
                    key: 'closedCaptionsTracks',
                    get: function get() {
                        var id = 0;
                        var trackId = function trackId() {
                            return id++;
                        };
                        var tracks = this.textTracks || [];

                        return tracks.filter(function (track) {
                            return track.kind === 'subtitle';
                        }).map(function (track) {
                            return {
                                id: trackId(),
                                name: track.label || track.language,
                                track: track
                            };
                        });
                    }

                    /**
                     * @override
                     */

  }, {
                    key: 'closedCaptionsTrackId',
                    get: function get() {
                            return _get(DashShakaPlayback.prototype.__proto__ || Object.getPrototypeOf(DashShakaPlayback.prototype), 'closedCaptionsTrackId', this);
                        }

                        /**
                         * @override
                         */
                        ,
                    set: function set(trackId) {
                        if (!this._player) {
                            return;
                        }

                        var tracks = this.closedCaptionsTracks;
                        var showingTrack = void 0;

                        // Note: -1 is for hide all tracks
                        if (trackId !== -1) {
                            showingTrack = tracks.find(function (track) {
                                return track.id === trackId;
                            });
                            if (!showingTrack) {
                                _clappr.Log.warn('Track id "' + trackId + '" not found');
                                return;
                            }
                            if (this._shakaTTVisible && showingTrack.track.active === true) {
                                _clappr.Log.info('Track id "' + trackId + '" already showing');
                                return;
                            }
                        }

                        if (showingTrack) {
                            this._player.selectTextTrack(showingTrack.track);
                            this._enableShakaTextTrack(true);
                        } else {
                            this._enableShakaTextTrack(false);
                        }

                        this._ccTrackId = trackId;
                        this.trigger(_clappr.Events.PLAYBACK_SUBTITLE_CHANGED, {
                            id: trackId
                        });
                    }
  }]);

                return DashShakaPlayback;
            }(_clappr.HTML5Video);

            exports.default = DashShakaPlayback;
            module.exports = exports['default'];

            /***/
        }),
/* 1 */
/***/
        (function (module, exports) {

            module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

            /***/
        }),
/* 2 */
/***/
        (function (module, exports, __webpack_require__) {

            var __WEBPACK_AMD_DEFINE_RESULT__;
            (function () {
                var g = {};
                (function (window) {
                    var k, aa = this;
                    aa.xe = !0;

                    function n(a, b) {
                        var c = a.split("."),
                            d = aa;
                        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
                        for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d[e] ? d = d[e] : d = d[e] = {} : d[e] = b
                    }

                    function ba(a) {
                        var b = p;

                        function c() {}
                        c.prototype = b.prototype;
                        a.Ce = b.prototype;
                        a.prototype = new c;
                        a.prototype.constructor = a;
                        a.ze = function (a, c, f) {
                            return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
                        }
                    };
                    /*

                     Copyright 2016 Google Inc.

                     Licensed under the Apache License, Version 2.0 (the "License");
                     you may not use this file except in compliance with the License.
                     You may obtain a copy of the License at

                         http://www.apache.org/licenses/LICENSE-2.0

                     Unless required by applicable law or agreed to in writing, software
                     distributed under the License is distributed on an "AS IS" BASIS,
                     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                     See the License for the specific language governing permissions and
                     limitations under the License.
                    */
                    function ca(a) {
                        this.c = Math.exp(Math.log(.5) / a);
                        this.b = this.a = 0
                    }

                    function da(a, b, c) {
                        var d = Math.pow(a.c, b);
                        c = c * (1 - d) + d * a.a;
                        isNaN(c) || (a.a = c, a.b += b)
                    }

                    function ea(a) {
                        return a.a / (1 - Math.pow(a.c, a.b))
                    };

                    function fa() {
                        this.c = new ca(2);
                        this.f = new ca(5);
                        this.a = 0;
                        this.b = 5E5
                    }
                    fa.prototype.setDefaultEstimate = function (a) {
                        this.b = a
                    };
                    fa.prototype.getBandwidthEstimate = function () {
                        return 128E3 > this.a ? this.b : Math.min(ea(this.c), ea(this.f))
                    };

                    function ga() {};

                    function t(a, b, c, d) {
                        this.severity = a;
                        this.category = b;
                        this.code = c;
                        this.data = Array.prototype.slice.call(arguments, 3)
                    }
                    n("shaka.util.Error", t);
                    t.prototype.toString = function () {
                        return "shaka.util.Error " + JSON.stringify(this, null, "  ")
                    };
                    t.Severity = {
                        RECOVERABLE: 1,
                        CRITICAL: 2
                    };
                    t.Category = {
                        NETWORK: 1,
                        TEXT: 2,
                        MEDIA: 3,
                        MANIFEST: 4,
                        STREAMING: 5,
                        DRM: 6,
                        PLAYER: 7,
                        CAST: 8,
                        STORAGE: 9
                    };
                    t.Code = {
                        UNSUPPORTED_SCHEME: 1E3,
                        BAD_HTTP_STATUS: 1001,
                        HTTP_ERROR: 1002,
                        TIMEOUT: 1003,
                        MALFORMED_DATA_URI: 1004,
                        UNKNOWN_DATA_URI_ENCODING: 1005,
                        REQUEST_FILTER_ERROR: 1006,
                        RESPONSE_FILTER_ERROR: 1007,
                        INVALID_TEXT_HEADER: 2E3,
                        INVALID_TEXT_CUE: 2001,
                        UNABLE_TO_DETECT_ENCODING: 2003,
                        BAD_ENCODING: 2004,
                        INVALID_XML: 2005,
                        INVALID_MP4_TTML: 2007,
                        INVALID_MP4_VTT: 2008,
                        BUFFER_READ_OUT_OF_BOUNDS: 3E3,
                        JS_INTEGER_OVERFLOW: 3001,
                        EBML_OVERFLOW: 3002,
                        EBML_BAD_FLOATING_POINT_SIZE: 3003,
                        MP4_SIDX_WRONG_BOX_TYPE: 3004,
                        MP4_SIDX_INVALID_TIMESCALE: 3005,
                        MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,
                        WEBM_CUES_ELEMENT_MISSING: 3007,
                        WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,
                        WEBM_SEGMENT_ELEMENT_MISSING: 3009,
                        WEBM_INFO_ELEMENT_MISSING: 3010,
                        WEBM_DURATION_ELEMENT_MISSING: 3011,
                        WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,
                        WEBM_CUE_TIME_ELEMENT_MISSING: 3013,
                        MEDIA_SOURCE_OPERATION_FAILED: 3014,
                        MEDIA_SOURCE_OPERATION_THREW: 3015,
                        VIDEO_ERROR: 3016,
                        QUOTA_EXCEEDED_ERROR: 3017,
                        UNABLE_TO_GUESS_MANIFEST_TYPE: 4E3,
                        DASH_INVALID_XML: 4001,
                        DASH_NO_SEGMENT_INFO: 4002,
                        DASH_EMPTY_ADAPTATION_SET: 4003,
                        DASH_EMPTY_PERIOD: 4004,
                        DASH_WEBM_MISSING_INIT: 4005,
                        DASH_UNSUPPORTED_CONTAINER: 4006,
                        DASH_PSSH_BAD_ENCODING: 4007,
                        DASH_NO_COMMON_KEY_SYSTEM: 4008,
                        DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,
                        DASH_CONFLICTING_KEY_IDS: 4010,
                        UNPLAYABLE_PERIOD: 4011,
                        RESTRICTIONS_CANNOT_BE_MET: 4012,
                        NO_PERIODS: 4014,
                        HLS_PLAYLIST_HEADER_MISSING: 4015,
                        INVALID_HLS_TAG: 4016,
                        HLS_INVALID_PLAYLIST_HIERARCHY: 4017,
                        DASH_DUPLICATE_REPRESENTATION_ID: 4018,
                        HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND: 4020,
                        HLS_COULD_NOT_GUESS_MIME_TYPE: 4021,
                        HLS_MASTER_PLAYLIST_NOT_PROVIDED: 4022,
                        HLS_REQUIRED_ATTRIBUTE_MISSING: 4023,
                        HLS_REQUIRED_TAG_MISSING: 4024,
                        HLS_COULD_NOT_GUESS_CODECS: 4025,
                        HLS_KEYFORMATS_NOT_SUPPORTED: 4026,
                        INVALID_STREAMS_CHOSEN: 5005,
                        NO_RECOGNIZED_KEY_SYSTEMS: 6E3,
                        REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,
                        FAILED_TO_CREATE_CDM: 6002,
                        FAILED_TO_ATTACH_TO_VIDEO: 6003,
                        INVALID_SERVER_CERTIFICATE: 6004,
                        FAILED_TO_CREATE_SESSION: 6005,
                        FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,
                        LICENSE_REQUEST_FAILED: 6007,
                        LICENSE_RESPONSE_REJECTED: 6008,
                        ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,
                        NO_LICENSE_SERVER_GIVEN: 6012,
                        OFFLINE_SESSION_REMOVED: 6013,
                        EXPIRED: 6014,
                        LOAD_INTERRUPTED: 7E3,
                        CAST_API_UNAVAILABLE: 8E3,
                        NO_CAST_RECEIVERS: 8001,
                        ALREADY_CASTING: 8002,
                        UNEXPECTED_CAST_ERROR: 8003,
                        CAST_CANCELED_BY_USER: 8004,
                        CAST_CONNECTION_TIMED_OUT: 8005,
                        CAST_RECEIVER_APP_UNAVAILABLE: 8006,
                        STORAGE_NOT_SUPPORTED: 9E3,
                        INDEXED_DB_ERROR: 9001,
                        OPERATION_ABORTED: 9002,
                        REQUESTED_ITEM_NOT_FOUND: 9003,
                        MALFORMED_OFFLINE_URI: 9004,
                        CANNOT_STORE_LIVE_OFFLINE: 9005,
                        STORE_ALREADY_IN_PROGRESS: 9006,
                        NO_INIT_DATA_FOR_OFFLINE: 9007,
                        LOCAL_PLAYER_INSTANCE_REQUIRED: 9008
                    };
                    var ha = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

                    function ia(a) {
                        var b;
                        a instanceof ia ? (ja(this, a.aa), this.Ca = a.Ca, this.ca = a.ca, ka(this, a.Ka), this.W = a.W, la(this, ma(a.a)), this.ua = a.ua) : a && (b = String(a).match(ha)) ? (ja(this, b[1] || "", !0), this.Ca = na(b[2] || ""), this.ca = na(b[3] || "", !0), ka(this, b[4]), this.W = na(b[5] || "", !0), la(this, b[6] || "", !0), this.ua = na(b[7] || "")) : this.a = new oa(null)
                    }
                    k = ia.prototype;
                    k.aa = "";
                    k.Ca = "";
                    k.ca = "";
                    k.Ka = null;
                    k.W = "";
                    k.ua = "";
                    k.toString = function () {
                        var a = [],
                            b = this.aa;
                        b && a.push(pa(b, qa, !0), ":");
                        if (b = this.ca) {
                            a.push("//");
                            var c = this.Ca;
                            c && a.push(pa(c, qa, !0), "@");
                            a.push(encodeURIComponent(b).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
                            b = this.Ka;
                            null != b && a.push(":", String(b))
                        }
                        if (b = this.W) this.ca && "/" != b.charAt(0) && a.push("/"), a.push(pa(b, "/" == b.charAt(0) ? ra : sa, !0));
                        (b = this.a.toString()) && a.push("?", b);
                        (b = this.ua) && a.push("#", pa(b, ta));
                        return a.join("")
                    };
                    k.resolve = function (a) {
                        var b = new ia(this);
                        "data" === b.aa && (b = new ia);
                        var c = !!a.aa;
                        c ? ja(b, a.aa) : c = !!a.Ca;
                        c ? b.Ca = a.Ca : c = !!a.ca;
                        c ? b.ca = a.ca : c = null != a.Ka;
                        var d = a.W;
                        if (c) ka(b, a.Ka);
                        else if (c = !!a.W) {
                            if ("/" != d.charAt(0))
                                if (this.ca && !this.W) d = "/" + d;
                                else {
                                    var e = b.W.lastIndexOf("/"); - 1 != e && (d = b.W.substr(0, e + 1) + d)
                                }
                            if (".." == d || "." == d) d = "";
                            else if (-1 != d.indexOf("./") || -1 != d.indexOf("/.")) {
                                for (var e = !d.lastIndexOf("/", 0), d = d.split("/"), f = [], g = 0; g < d.length;) {
                                    var h = d[g++];
                                    "." == h ? e && g == d.length && f.push("") : ".." == h ? ((1 <
                                        f.length || 1 == f.length && "" != f[0]) && f.pop(), e && g == d.length && f.push("")) : (f.push(h), e = !0)
                                }
                                d = f.join("/")
                            }
                        }
                        c ? b.W = d : c = "" !== a.a.toString();
                        c ? la(b, ma(a.a)) : c = !!a.ua;
                        c && (b.ua = a.ua);
                        return b
                    };

                    function ja(a, b, c) {
                        a.aa = c ? na(b, !0) : b;
                        a.aa && (a.aa = a.aa.replace(/:$/, ""))
                    }

                    function ka(a, b) {
                        if (b) {
                            b = Number(b);
                            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                            a.Ka = b
                        } else a.Ka = null
                    }

                    function la(a, b, c) {
                        b instanceof oa ? a.a = b : (c || (b = pa(b, ua)), a.a = new oa(b))
                    }

                    function na(a, b) {
                        return a ? b ? decodeURI(a) : decodeURIComponent(a) : ""
                    }

                    function pa(a, b, c) {
                        return "string" == typeof a ? (a = encodeURI(a).replace(b, va), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
                    }

                    function va(a) {
                        a = a.charCodeAt(0);
                        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
                    }
                    var qa = /[#\/\?@]/g,
                        sa = /[\#\?:]/g,
                        ra = /[\#\?]/g,
                        ua = /[\#\?@]/g,
                        ta = /#/g;

                    function oa(a) {
                        this.b = a || null
                    }
                    oa.prototype.a = null;
                    oa.prototype.c = null;
                    oa.prototype.toString = function () {
                        if (this.b) return this.b;
                        if (!this.a) return "";
                        var a = [],
                            b;
                        for (b in this.a)
                            for (var c = encodeURIComponent(b), d = this.a[b], e = 0; e < d.length; e++) {
                                var f = c;
                                "" !== d[e] && (f += "=" + encodeURIComponent(d[e]));
                                a.push(f)
                            }
                        return this.b = a.join("&")
                    };

                    function ma(a) {
                        var b = new oa;
                        b.b = a.b;
                        if (a.a) {
                            var c = {},
                                d;
                            for (d in a.a) c[d] = a.a[d].concat();
                            b.a = c;
                            b.c = a.c
                        }
                        return b
                    };

                    function wa(a, b) {
                        return a.reduce(function (a, b, e) {
                            return b["catch"](a.bind(null, e))
                        }.bind(null, b), Promise.reject())
                    }

                    function w(a, b) {
                        return a.concat(b)
                    }

                    function y() {}

                    function xa(a) {
                        return null != a
                    }

                    function ya(a) {
                        return function (b) {
                            return b != a
                        }
                    }

                    function za(a, b, c) {
                        return c.indexOf(a) == b
                    };

                    function z(a, b) {
                        if (!b.length) return a;
                        var c = b.map(function (a) {
                            return new ia(a)
                        });
                        return a.map(function (a) {
                            return new ia(a)
                        }).map(function (a) {
                            return c.map(a.resolve.bind(a))
                        }).reduce(w, []).map(function (a) {
                            return a.toString()
                        })
                    }

                    function Aa(a, b) {
                        return {
                            keySystem: a,
                            licenseServerUri: "",
                            distinctiveIdentifierRequired: !1,
                            persistentStateRequired: !1,
                            audioRobustness: "",
                            videoRobustness: "",
                            serverCertificate: null,
                            initData: b || [],
                            keyIds: []
                        }
                    }
                    var Ba = 1 / 15;

                    function Ca(a, b, c, d, e) {
                        var f = e in d,
                            g;
                        for (g in b) {
                            var h = e + "." + g,
                                l = f ? d[e] : c[g],
                                m = !!{
                                    ".abr.manager": !0
                                }[h] || !!{
                                    serverCertificate: !0
                                }[g];
                            if (f || g in a) void 0 === b[g] ? void 0 === l || f ? delete a[g] : a[g] = l : m ? a[g] = b[g] : "object" == typeof a[g] && "object" == typeof b[g] ? Ca(a[g], b[g], l, d, h) : typeof b[g] == typeof l && (a[g] = b[g])
                        }
                    }

                    function Da(a) {
                        return JSON.parse(JSON.stringify(a))
                    };

                    function A() {
                        var a, b, c = new Promise(function (c, e) {
                            a = c;
                            b = e
                        });
                        c.resolve = a;
                        c.reject = b;
                        return c
                    };

                    function B(a) {
                        this.f = !1;
                        this.a = [];
                        this.b = [];
                        this.c = [];
                        this.h = a || null
                    }
                    n("shaka.net.NetworkingEngine", B);
                    B.RequestType = {
                        MANIFEST: 0,
                        SEGMENT: 1,
                        LICENSE: 2,
                        APP: 3
                    };
                    var Ea = {};
                    B.registerScheme = function (a, b) {
                        Ea[a] = b
                    };
                    B.unregisterScheme = function (a) {
                        delete Ea[a]
                    };
                    B.prototype.Ld = function (a) {
                        this.b.push(a)
                    };
                    B.prototype.registerRequestFilter = B.prototype.Ld;
                    B.prototype.pe = function (a) {
                        var b = this.b;
                        a = b.indexOf(a);
                        0 <= a && b.splice(a, 1)
                    };
                    B.prototype.unregisterRequestFilter = B.prototype.pe;
                    B.prototype.Ic = function () {
                        this.b = []
                    };
                    B.prototype.clearAllRequestFilters = B.prototype.Ic;
                    B.prototype.Md = function (a) {
                        this.c.push(a)
                    };
                    B.prototype.registerResponseFilter = B.prototype.Md;
                    B.prototype.qe = function (a) {
                        var b = this.c;
                        a = b.indexOf(a);
                        0 <= a && b.splice(a, 1)
                    };
                    B.prototype.unregisterResponseFilter = B.prototype.qe;
                    B.prototype.Jc = function () {
                        this.c = []
                    };
                    B.prototype.clearAllResponseFilters = B.prototype.Jc;

                    function Fa() {
                        return {
                            maxAttempts: 2,
                            baseDelay: 1E3,
                            backoffFactor: 2,
                            fuzzFactor: .5,
                            timeout: 0
                        }
                    }

                    function Ga(a, b) {
                        return {
                            uris: a,
                            method: "GET",
                            body: null,
                            headers: {},
                            allowCrossSiteCredentials: !1,
                            retryParameters: b
                        }
                    }
                    B.prototype.m = function () {
                        this.f = !0;
                        this.b = [];
                        this.c = [];
                        for (var a = [], b = 0; b < this.a.length; ++b) a.push(this.a[b]["catch"](y));
                        return Promise.all(a)
                    };
                    B.prototype.destroy = B.prototype.m;
                    B.prototype.request = function (a, b) {
                        if (this.f) return Promise.reject();
                        b.method = b.method || "GET";
                        b.headers = b.headers || {};
                        b.retryParameters = b.retryParameters ? Da(b.retryParameters) : Fa();
                        b.uris = Da(b.uris);
                        var c = Date.now(),
                            d = Promise.resolve();
                        this.b.forEach(function (c) {
                            d = d.then(c.bind(null, a, b))
                        });
                        d = d["catch"](function (a) {
                            throw new t(2, 1, 1006, a);
                        });
                        d = d.then(function () {
                            for (var d = Date.now() - c, f = b.retryParameters || {}, g = f.maxAttempts || 1, h = f.backoffFactor || 2, f = null == f.baseDelay ? 1E3 : f.baseDelay, l = this.g(a, b, 0,
                                    d), m = 1; m < g; m++) l = l["catch"](function (c, e, f) {
                                if (f && 1 == f.severity) {
                                    f = new A;
                                    var g = b.retryParameters || {};
                                    window.setTimeout(f.resolve, c * (1 + (2 * Math.random() - 1) * (null == g.fuzzFactor ? .5 : g.fuzzFactor)));
                                    return f.then(this.g.bind(this, a, b, e, d))
                                }
                                throw f;
                            }.bind(this, f, m % b.uris.length)), f *= h;
                            return l
                        }.bind(this));
                        this.a.push(d);
                        return d.then(function (b) {
                            0 <= this.a.indexOf(d) && this.a.splice(this.a.indexOf(d), 1);
                            this.h && !b.fromCache && 1 == a && this.h(b.timeMs, b.data.byteLength);
                            return b
                        }.bind(this))["catch"](function (a) {
                            a &&
                                (a.severity = 2);
                            0 <= this.a.indexOf(d) && this.a.splice(this.a.indexOf(d), 1);
                            return Promise.reject(a)
                        }.bind(this))
                    };
                    B.prototype.request = B.prototype.request;
                    B.prototype.g = function (a, b, c, d) {
                        if (this.f) return Promise.reject();
                        var e = new ia(b.uris[c]),
                            f = e.aa;
                        f || (f = location.protocol, f = f.slice(0, -1), ja(e, f), b.uris[c] = e.toString());
                        f = Ea[f];
                        if (!f) return Promise.reject(new t(2, 1, 1E3, e));
                        var g = Date.now();
                        return f(b.uris[c], b, a).then(function (b) {
                            void 0 == b.timeMs && (b.timeMs = Date.now() - g);
                            var c = Date.now(),
                                e = Promise.resolve();
                            this.c.forEach(function (c) {
                                e = e.then(function () {
                                    return Promise.resolve(c(a, b))
                                }.bind(this))
                            });
                            e = e["catch"](function (a) {
                                var b = 2;
                                a instanceof t &&
                                    (b = a.severity);
                                throw new t(b, 1, 1007, a);
                            });
                            return e.then(function () {
                                b.timeMs += Date.now() - c;
                                b.timeMs += d;
                                return b
                            })
                        }.bind(this))
                    };

                    function Ha(a, b) {
                        for (var c = [], d = 0; d < a.length; ++d) {
                            for (var e = !1, f = 0; f < c.length && !(e = b ? b(a[d], c[f]) : a[d] === c[f]); ++f);
                            e || c.push(a[d])
                        }
                        return c
                    }

                    function Ia(a, b, c) {
                        for (var d = 0; d < a.length; ++d)
                            if (c(a[d], b)) return d;
                        return -1
                    };

                    function Ja() {
                        this.a = {}
                    }
                    Ja.prototype.push = function (a, b) {
                        this.a.hasOwnProperty(a) ? this.a[a].push(b) : this.a[a] = [b]
                    };
                    Ja.prototype.get = function (a) {
                        return (a = this.a[a]) ? a.slice() : null
                    };
                    Ja.prototype.remove = function (a, b) {
                        var c = this.a[a];
                        if (c)
                            for (var d = 0; d < c.length; ++d) c[d] == b && (c.splice(d, 1), --d)
                    };

                    function C() {
                        this.a = new Ja
                    }
                    C.prototype.m = function () {
                        Ka(this);
                        this.a = null;
                        return Promise.resolve()
                    };

                    function D(a, b, c, d) {
                        a.a && (b = new La(b, c, d), a.a.push(c, b))
                    }

                    function Ma(a, b, c, d) {
                        D(a, b, c, function (a) {
                            this.ha(b, c);
                            d(a)
                        }.bind(a))
                    }
                    C.prototype.ha = function (a, b) {
                        if (this.a)
                            for (var c = this.a.get(b) || [], d = 0; d < c.length; ++d) {
                                var e = c[d];
                                e.target == a && (e.ha(), this.a.remove(b, e))
                            }
                    };

                    function Ka(a) {
                        if (a.a) {
                            var b = a.a,
                                c = [],
                                d;
                            for (d in b.a) c.push.apply(c, b.a[d]);
                            for (b = 0; b < c.length; ++b) c[b].ha();
                            a.a.a = {}
                        }
                    }

                    function La(a, b, c) {
                        this.target = a;
                        this.type = b;
                        this.a = c;
                        this.target.addEventListener(b, c, !1)
                    }
                    La.prototype.ha = function () {
                        this.target.removeEventListener(this.type, this.a, !1);
                        this.a = this.target = null
                    };

                    function Na(a) {
                        return !a || !Object.keys(a).length
                    }

                    function Oa(a) {
                        return Object.keys(a).map(function (b) {
                            return a[b]
                        })
                    }

                    function Pa(a, b) {
                        return Object.keys(a).reduce(function (c, d) {
                            c[d] = b(a[d], d);
                            return c
                        }, {})
                    }

                    function Qa(a, b) {
                        return Object.keys(a).every(function (c) {
                            return b(c, a[c])
                        })
                    }

                    function Ra(a, b) {
                        Object.keys(a).forEach(function (c) {
                            b(c, a[c])
                        })
                    };

                    function E(a) {
                        if (!a) return "";
                        a = new Uint8Array(a);
                        239 == a[0] && 187 == a[1] && 191 == a[2] && (a = a.subarray(3));
                        a = escape(Sa(a));
                        try {
                            return decodeURIComponent(a)
                        } catch (b) {
                            throw new t(2, 2, 2004);
                        }
                    }
                    n("shaka.util.StringUtils.fromUTF8", E);

                    function Ta(a, b, c) {
                        if (!a) return "";
                        if (!c && a.byteLength % 2) throw new t(2, 2, 2004);
                        if (a instanceof ArrayBuffer) var d = a;
                        else c = new Uint8Array(a.byteLength), c.set(new Uint8Array(a)), d = c.buffer;
                        a = Math.floor(a.byteLength / 2);
                        c = new Uint16Array(a);
                        d = new DataView(d);
                        for (var e = 0; e < a; e++) c[e] = d.getUint16(2 * e, b);
                        return Sa(c)
                    }
                    n("shaka.util.StringUtils.fromUTF16", Ta);

                    function Ua(a) {
                        var b = new Uint8Array(a);
                        if (239 == b[0] && 187 == b[1] && 191 == b[2]) return E(b);
                        if (254 == b[0] && 255 == b[1]) return Ta(b.subarray(2), !1);
                        if (255 == b[0] && 254 == b[1]) return Ta(b.subarray(2), !0);
                        var c = function (a, b) {
                            return a.byteLength <= b || 32 <= a[b] && 126 >= a[b]
                        }.bind(null, b);
                        if (b[0] || b[2]) {
                            if (!b[1] && !b[3]) return Ta(a, !0);
                            if (c(0) && c(1) && c(2) && c(3)) return E(a)
                        } else return Ta(a, !1);
                        throw new t(2, 2, 2003);
                    }
                    n("shaka.util.StringUtils.fromBytesAutoDetect", Ua);

                    function Va(a) {
                        a = unescape(encodeURIComponent(a));
                        for (var b = new Uint8Array(a.length), c = 0; c < a.length; ++c) b[c] = a.charCodeAt(c);
                        return b.buffer
                    }
                    n("shaka.util.StringUtils.toUTF8", Va);

                    function Sa(a) {
                        for (var b = "", c = 0; c < a.length; c += 16E3) b += String.fromCharCode.apply(null, a.subarray(c, c + 16E3));
                        return b
                    };

                    function Wa(a) {
                        this.a = null;
                        this.b = function () {
                            this.a = null;
                            a()
                        }.bind(this)
                    }
                    Wa.prototype.cancel = function () {
                        null != this.a && (clearTimeout(this.a), this.a = null)
                    };

                    function Xa(a) {
                        a.cancel();
                        a.a = setTimeout(a.b, 500)
                    };

                    function Ya(a, b) {
                        var c = void 0 == b ? !0 : b,
                            d = window.btoa(String.fromCharCode.apply(null, a)).replace(/\+/g, "-").replace(/\//g, "_");
                        return c ? d : d.replace(/=*$/, "")
                    }
                    n("shaka.util.Uint8ArrayUtils.toBase64", Ya);

                    function Za(a) {
                        a = window.atob(a.replace(/-/g, "+").replace(/_/g, "/"));
                        for (var b = new Uint8Array(a.length), c = 0; c < a.length; ++c) b[c] = a.charCodeAt(c);
                        return b
                    }
                    n("shaka.util.Uint8ArrayUtils.fromBase64", Za);

                    function $a(a) {
                        for (var b = new Uint8Array(a.length / 2), c = 0; c < a.length; c += 2) b[c / 2] = window.parseInt(a.substr(c, 2), 16);
                        return b
                    }
                    n("shaka.util.Uint8ArrayUtils.fromHex", $a);

                    function ab(a) {
                        for (var b = "", c = 0; c < a.length; ++c) {
                            var d = a[c].toString(16);
                            1 == d.length && (d = "0" + d);
                            b += d
                        }
                        return b
                    }
                    n("shaka.util.Uint8ArrayUtils.toHex", ab);

                    function bb(a, b) {
                        if (!a && !b) return !0;
                        if (!a || !b || a.length != b.length) return !1;
                        for (var c = 0; c < a.length; ++c)
                            if (a[c] != b[c]) return !1;
                        return !0
                    }
                    n("shaka.util.Uint8ArrayUtils.equal", bb);
                    n("shaka.util.Uint8ArrayUtils.concat", function (a) {
                        for (var b = 0, c = 0; c < arguments.length; ++c) b += arguments[c].length;
                        for (var b = new Uint8Array(b), d = 0, c = 0; c < arguments.length; ++c) b.set(arguments[c], d), d += arguments[c].length;
                        return b
                    });

                    function cb(a, b, c, d) {
                        this.l = this.j = this.v = null;
                        this.J = !1;
                        this.b = null;
                        this.f = new C;
                        this.a = [];
                        this.o = [];
                        this.i = new A;
                        this.la = a;
                        this.h = null;
                        this.g = function (a) {
                            this.i.reject(a);
                            b(a)
                        }.bind(this);
                        this.A = {};
                        this.Da = c;
                        this.ma = d;
                        this.B = new Wa(this.Kd.bind(this));
                        this.ka = this.c = !1;
                        this.G = [];
                        this.ja = !1;
                        this.O = setInterval(this.Jd.bind(this), 1E3);
                        this.i["catch"](function () {})
                    }
                    k = cb.prototype;
                    k.m = function () {
                        this.c = !0;
                        var a = this.a.map(function (a) {
                            return (a.ba.close() || Promise.resolve())["catch"](y)
                        });
                        this.i.reject();
                        this.f && a.push(this.f.m());
                        this.l && a.push(this.l.setMediaKeys(null)["catch"](y));
                        this.O && (clearInterval(this.O), this.O = null);
                        this.B && this.B.cancel();
                        this.f = this.l = this.j = this.v = this.b = this.B = null;
                        this.a = [];
                        this.o = [];
                        this.ma = this.g = this.h = this.la = null;
                        return Promise.all(a)
                    };
                    k.configure = function (a) {
                        this.h = a
                    };
                    k.init = function (a, b) {
                        var c = {},
                            d = [];
                        this.ka = b;
                        this.o = a.offlineSessionIds;
                        db(this, a, b || 0 < a.offlineSessionIds.length, c, d);
                        return d.length ? eb(this, c, d) : (this.J = !0, Promise.resolve())
                    };

                    function fb(a, b) {
                        if (!a.j) return Ma(a.f, b, "encrypted", function () {
                            this.g(new t(2, 6, 6010))
                        }.bind(a)), Promise.resolve();
                        a.l = b;
                        Ma(a.f, a.l, "play", a.qd.bind(a));
                        var c = a.l.setMediaKeys(a.j),
                            c = c["catch"](function (a) {
                                return Promise.reject(new t(2, 6, 6003, a.message))
                            }),
                            d = null;
                        a.b.serverCertificate && (d = a.j.setServerCertificate(a.b.serverCertificate).then(function () {})["catch"](function (a) {
                            return Promise.reject(new t(2, 6, 6004, a.message))
                        }));
                        return Promise.all([c, d]).then(function () {
                            if (this.c) return Promise.reject();
                            gb(this);
                            this.b.initData.length || this.o.length || D(this.f, this.l, "encrypted", this.fd.bind(this))
                        }.bind(a))["catch"](function (a) {
                            return this.c ? Promise.resolve() : Promise.reject(a)
                        }.bind(a))
                    }

                    function hb(a, b) {
                        return Promise.all(b.map(function (a) {
                            return ib(this, a).then(function (a) {
                                if (a) {
                                    for (var b = new A, c = 0; c < this.a.length; c++)
                                        if (this.a[c].ba == a) {
                                            this.a[c].ia = b;
                                            break
                                        }
                                    return Promise.all([a.remove(), b])
                                }
                            }.bind(this))
                        }.bind(a)))
                    }

                    function gb(a) {
                        var b = a.b ? a.b.initData : [];
                        b.forEach(function (a) {
                            jb(this, a.initDataType, a.initData)
                        }.bind(a));
                        a.o.forEach(function (a) {
                            ib(this, a)
                        }.bind(a));
                        b.length || a.o.length || a.i.resolve();
                        return a.i
                    }
                    k.keySystem = function () {
                        return this.b ? this.b.keySystem : ""
                    };

                    function kb(a) {
                        return a.a.map(function (a) {
                            return a.ba.sessionId
                        })
                    }
                    k.bb = function () {
                        var a = this.a.map(function (a) {
                            a = a.ba.expiration;
                            return isNaN(a) ? Infinity : a
                        });
                        return Math.min.apply(Math, a)
                    };

                    function db(a, b, c, d, e) {
                        var f = lb(a);
                        b.periods.forEach(function (a) {
                            a.variants.forEach(function (a) {
                                f && (a.drmInfos = [f]);
                                a.drmInfos.forEach(function (b) {
                                    mb(this, b);
                                    window.cast && window.cast.__platform__ && "com.microsoft.playready" == b.keySystem && (b.keySystem = "com.chromecast.playready");
                                    var f = d[b.keySystem];
                                    f || (f = {
                                            audioCapabilities: [],
                                            videoCapabilities: [],
                                            distinctiveIdentifier: "optional",
                                            persistentState: c ? "required" : "optional",
                                            sessionTypes: [c ? "persistent-license" : "temporary"],
                                            label: b.keySystem,
                                            drmInfos: []
                                        },
                                        d[b.keySystem] = f, e.push(b.keySystem));
                                    f.drmInfos.push(b);
                                    b.distinctiveIdentifierRequired && (f.distinctiveIdentifier = "required");
                                    b.persistentStateRequired && (f.persistentState = "required");
                                    var g = [];
                                    a.video && g.push(a.video);
                                    a.audio && g.push(a.audio);
                                    g.forEach(function (a) {
                                        var c = "video" == a.type ? f.videoCapabilities : f.audioCapabilities,
                                            d = ("video" == a.type ? b.videoRobustness : b.audioRobustness) || "",
                                            e = a.mimeType;
                                        a.codecs && (e += '; codecs="' + a.codecs + '"');
                                        c.push({
                                            robustness: d,
                                            contentType: e
                                        })
                                    }.bind(this))
                                }.bind(this))
                            }.bind(this))
                        }.bind(a))
                    }

                    function eb(a, b, c) {
                        if (1 == c.length && "" == c[0]) return Promise.reject(new t(2, 6, 6E3));
                        var d = new A,
                            e = d;
                        [!0, !1].forEach(function (a) {
                            c.forEach(function (c) {
                                var d = b[c];
                                d.drmInfos.some(function (a) {
                                    return !!a.licenseServerUri
                                }) == a && (d.audioCapabilities.length || delete d.audioCapabilities, d.videoCapabilities.length || delete d.videoCapabilities, e = e["catch"](function () {
                                    return this.c ? Promise.reject() : navigator.requestMediaKeySystemAccess(c, [d])
                                }.bind(this)))
                            }.bind(this))
                        }.bind(a));
                        e = e["catch"](function () {
                            return Promise.reject(new t(2,
                                6, 6001))
                        });
                        e = e.then(function (a) {
                            if (this.c) return Promise.reject();
                            var c = 0 <= navigator.userAgent.indexOf("Edge/"),
                                d = a.getConfiguration();
                            this.v = (d.audioCapabilities || []).concat(d.videoCapabilities || []).map(function (a) {
                                return a.contentType
                            });
                            c && (this.v = null);
                            c = b[a.keySystem];
                            nb(this, a.keySystem, c, c.drmInfos);
                            return this.b.licenseServerUri ? a.createMediaKeys() : Promise.reject(new t(2, 6, 6012))
                        }.bind(a)).then(function (a) {
                            if (this.c) return Promise.reject();
                            this.j = a;
                            this.J = !0
                        }.bind(a))["catch"](function (a) {
                            if (this.c) return Promise.resolve();
                            this.v = this.b = null;
                            return a instanceof t ? Promise.reject(a) : Promise.reject(new t(2, 6, 6002, a.message))
                        }.bind(a));
                        d.reject();
                        return e
                    }

                    function mb(a, b) {
                        var c = b.keySystem;
                        if (c) {
                            if (!b.licenseServerUri) {
                                var d = a.h.servers[c];
                                d && (b.licenseServerUri = d)
                            }
                            b.keyIds || (b.keyIds = []);
                            if (c = a.h.advanced[c]) b.distinctiveIdentifierRequired || (b.distinctiveIdentifierRequired = c.distinctiveIdentifierRequired), b.persistentStateRequired || (b.persistentStateRequired = c.persistentStateRequired), b.videoRobustness || (b.videoRobustness = c.videoRobustness), b.audioRobustness || (b.audioRobustness = c.audioRobustness), b.serverCertificate || (b.serverCertificate = c.serverCertificate)
                        }
                    }

                    function lb(a) {
                        if (Na(a.h.clearKeys)) return null;
                        var b = [],
                            c = [],
                            d;
                        for (d in a.h.clearKeys) {
                            var e = a.h.clearKeys[d],
                                f = $a(d),
                                e = $a(e),
                                f = {
                                    kty: "oct",
                                    kid: Ya(f, !1),
                                    k: Ya(e, !1)
                                };
                            b.push(f);
                            c.push(f.kid)
                        }
                        a = JSON.stringify({
                            keys: b
                        });
                        c = JSON.stringify({
                            kids: c
                        });
                        c = [{
                            initData: new Uint8Array(Va(c)),
                            initDataType: "keyids"
                        }];
                        return {
                            keySystem: "org.w3.clearkey",
                            licenseServerUri: "data:application/json;base64," + window.btoa(a),
                            distinctiveIdentifierRequired: !1,
                            persistentStateRequired: !1,
                            audioRobustness: "",
                            videoRobustness: "",
                            serverCertificate: null,
                            initData: c,
                            keyIds: []
                        }
                    }

                    function nb(a, b, c, d) {
                        var e = [],
                            f = [],
                            g = [],
                            h = [];
                        ob(d, e, f, g, h);
                        a.b = {
                            keySystem: b,
                            licenseServerUri: e[0],
                            distinctiveIdentifierRequired: "required" == c.distinctiveIdentifier,
                            persistentStateRequired: "required" == c.persistentState,
                            audioRobustness: c.audioCapabilities ? c.audioCapabilities[0].robustness : "",
                            videoRobustness: c.videoCapabilities ? c.videoCapabilities[0].robustness : "",
                            serverCertificate: f[0],
                            initData: g,
                            keyIds: h
                        }
                    }

                    function ob(a, b, c, d, e) {
                        function f(a, b) {
                            return a.keyId && a.keyId == b.keyId ? !0 : a.initDataType == b.initDataType && bb(a.initData, b.initData)
                        }
                        a.forEach(function (a) {
                            -1 == b.indexOf(a.licenseServerUri) && b.push(a.licenseServerUri);
                            a.serverCertificate && -1 == Ia(c, a.serverCertificate, bb) && c.push(a.serverCertificate);
                            a.initData && a.initData.forEach(function (a) {
                                -1 == Ia(d, a, f) && d.push(a)
                            });
                            if (a.keyIds)
                                for (var g = 0; g < a.keyIds.length; ++g) - 1 == e.indexOf(a.keyIds[g]) && e.push(a.keyIds[g])
                        })
                    }
                    k.fd = function (a) {
                        for (var b = new Uint8Array(a.initData), c = 0; c < this.a.length; ++c)
                            if (bb(b, this.a[c].initData)) return;
                        jb(this, a.initDataType, b)
                    };

                    function ib(a, b) {
                        try {
                            var c = a.j.createSession("persistent-license")
                        } catch (f) {
                            var d = new t(2, 6, 6005, f.message);
                            a.g(d);
                            return Promise.reject(d)
                        }
                        D(a.f, c, "message", a.kc.bind(a));
                        D(a.f, c, "keystatuseschange", a.ec.bind(a));
                        var e = {
                            initData: null,
                            ba: c,
                            loaded: !1,
                            zb: Infinity,
                            ia: null
                        };
                        a.a.push(e);
                        return c.load(b).then(function (a) {
                            if (!this.c) {
                                if (a) return e.loaded = !0, this.a.every(function (a) {
                                    return a.loaded
                                }) && this.i.resolve(), c;
                                this.a.splice(this.a.indexOf(e), 1);
                                this.g(new t(2, 6, 6013))
                            }
                        }.bind(a), function (a) {
                            this.c ||
                                (this.a.splice(this.a.indexOf(e), 1), this.g(new t(2, 6, 6005, a.message)))
                        }.bind(a))
                    }

                    function jb(a, b, c) {
                        try {
                            var d = a.ka ? a.j.createSession("persistent-license") : a.j.createSession()
                        } catch (e) {
                            a.g(new t(2, 6, 6005, e.message));
                            return
                        }
                        D(a.f, d, "message", a.kc.bind(a));
                        D(a.f, d, "keystatuseschange", a.ec.bind(a));
                        a.a.push({
                            initData: c,
                            ba: d,
                            loaded: !1,
                            zb: Infinity,
                            ia: null
                        });
                        d.generateRequest(b, c.buffer)["catch"](function (a) {
                            if (!this.c) {
                                for (var b = 0; b < this.a.length; ++b)
                                    if (this.a[b].ba == d) {
                                        this.a.splice(b, 1);
                                        break
                                    }
                                this.g(new t(2, 6, 6006, a.message))
                            }
                        }.bind(a))
                    }
                    k.kc = function (a) {
                        this.h.delayLicenseRequestUntilPlayed && this.l.paused && !this.ja ? this.G.push(a) : pb(this, a)
                    };

                    function pb(a, b) {
                        for (var c = b.target, d, e = 0; e < a.a.length; e++)
                            if (a.a[e].ba == c) {
                                d = a.a[e];
                                break
                            }
                        e = Ga([a.b.licenseServerUri], a.h.retryParameters);
                        e.body = b.message;
                        e.method = "POST";
                        "com.microsoft.playready" != a.b.keySystem && "com.chromecast.playready" != a.b.keySystem || qb(e);
                        a.la.request(2, e).then(function (a) {
                                return this.c ? Promise.reject() : c.update(a.data).then(function () {
                                    d && (d.ia && d.ia.resolve(), setTimeout(function () {
                                        d.loaded = !0;
                                        this.a.every(function (a) {
                                            return a.loaded
                                        }) && this.i.resolve()
                                    }.bind(this), 5E3))
                                }.bind(this))
                            }.bind(a),
                            function (a) {
                                if (this.c) return Promise.resolve();
                                a = new t(2, 6, 6007, a);
                                this.g(a);
                                d && d.ia && d.ia.reject(a)
                            }.bind(a))["catch"](function (a) {
                            if (this.c) return Promise.resolve();
                            a = new t(2, 6, 6008, a.message);
                            this.g(a);
                            d && d.ia && d.ia.reject(a)
                        }.bind(a))
                    }

                    function qb(a) {
                        var b = Ta(a.body, !0, !0);
                        if (-1 == b.indexOf("PlayReadyKeyMessage")) a.headers["Content-Type"] = "text/xml; charset=utf-8";
                        else {
                            for (var b = (new DOMParser).parseFromString(b, "application/xml"), c = b.getElementsByTagName("HttpHeader"), d = 0; d < c.length; ++d) a.headers[c[d].querySelector("name").textContent] = c[d].querySelector("value").textContent;
                            a.body = Za(b.querySelector("Challenge").textContent).buffer
                        }
                    }
                    k.ec = function (a) {
                        a = a.target;
                        var b;
                        for (b = 0; b < this.a.length && this.a[b].ba != a; ++b);
                        if (b != this.a.length) {
                            var c = !1;
                            a.keyStatuses.forEach(function (a, d) {
                                if ("string" == typeof d) {
                                    var e = d;
                                    d = a;
                                    a = e
                                }
                                if ("com.microsoft.playready" == this.b.keySystem && 16 == d.byteLength) {
                                    var e = new DataView(d),
                                        f = e.getUint32(0, !0),
                                        l = e.getUint16(4, !0),
                                        m = e.getUint16(6, !0);
                                    e.setUint32(0, f, !1);
                                    e.setUint16(4, l, !1);
                                    e.setUint16(6, m, !1)
                                }
                                "com.microsoft.playready" == this.b.keySystem && "status-pending" == a && (a = "usable");
                                "status-pending" != a && (this.a[b].loaded = !0, this.a.every(function (a) {
                                    return a.loaded
                                }) && this.i.resolve());
                                "expired" == a && (c = !0);
                                e = ab(new Uint8Array(d));
                                this.A[e] = a
                            }.bind(this));
                            var d = a.expiration - Date.now();
                            (0 > d || c && 1E3 > d) && !this.a[b].ia && (this.a.splice(b, 1), a.close());
                            Xa(this.B)
                        }
                    };
                    k.Kd = function () {
                        function a(a, c) {
                            return "expired" == c
                        }!Na(this.A) && Qa(this.A, a) && this.g(new t(2, 6, 6014));
                        this.Da(this.A)
                    };

                    function rb() {
                        var a = [],
                            b = [{
                                contentType: 'video/mp4; codecs="avc1.42E01E"'
                            }, {
                                contentType: 'video/webm; codecs="vp8"'
                            }],
                            c = [{
                                videoCapabilities: b,
                                persistentState: "required",
                                sessionTypes: ["persistent-license"]
                            }, {
                                videoCapabilities: b
                            }],
                            d = {};
                        "org.w3.clearkey com.widevine.alpha com.microsoft.playready com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" ").forEach(function (b) {
                            var e = navigator.requestMediaKeySystemAccess(b, c).then(function (a) {
                                var c = a.getConfiguration().sessionTypes,
                                    c =
                                    c ? 0 <= c.indexOf("persistent-license") : !1;
                                0 <= navigator.userAgent.indexOf("Tizen 3") && (c = !1);
                                d[b] = {
                                    persistentState: c
                                };
                                return a.createMediaKeys()
                            })["catch"](function () {
                                d[b] = null
                            });
                            a.push(e)
                        });
                        return Promise.all(a).then(function () {
                            return d
                        })
                    }
                    k.qd = function () {
                        for (var a = 0; a < this.G.length; a++) pb(this, this.G[a]);
                        this.ja = !0;
                        this.G = []
                    };

                    function sb(a, b) {
                        var c = a.keySystem();
                        return !b.drmInfos.length || b.drmInfos.some(function (a) {
                            return a.keySystem == c
                        })
                    }

                    function tb(a, b) {
                        if (!a.length) return b;
                        if (!b.length) return a;
                        for (var c = [], d = 0; d < a.length; d++)
                            for (var e = 0; e < b.length; e++)
                                if (a[d].keySystem == b[e].keySystem) {
                                    var f = a[d],
                                        e = b[e],
                                        g = [],
                                        g = g.concat(f.initData || []),
                                        g = g.concat(e.initData || []),
                                        h = [],
                                        h = h.concat(f.keyIds),
                                        h = h.concat(e.keyIds);
                                    c.push({
                                        keySystem: f.keySystem,
                                        licenseServerUri: f.licenseServerUri || e.licenseServerUri,
                                        distinctiveIdentifierRequired: f.distinctiveIdentifierRequired || e.distinctiveIdentifierRequired,
                                        persistentStateRequired: f.persistentStateRequired ||
                                            e.persistentStateRequired,
                                        videoRobustness: f.videoRobustness || e.videoRobustness,
                                        audioRobustness: f.audioRobustness || e.audioRobustness,
                                        serverCertificate: f.serverCertificate || e.serverCertificate,
                                        initData: g,
                                        keyIds: h
                                    });
                                    break
                                }
                        return c
                    }
                    k.Jd = function () {
                        this.a.forEach(function (a) {
                            var b = a.zb,
                                c = a.ba.expiration;
                            isNaN(c) && (c = Infinity);
                            c != b && (this.ma(a.ba.sessionId, c), a.zb = c)
                        }.bind(this))
                    };

                    function ub(a) {
                        this.f = null;
                        this.c = a;
                        this.h = 0;
                        this.g = Infinity;
                        this.a = this.b = null
                    }
                    var vb = {};

                    function wb(a, b) {
                        vb[a] = b.length ? xb.bind(null, b) : b
                    }
                    n("shaka.media.TextEngine.registerParser", wb);
                    n("shaka.media.TextEngine.unregisterParser", function (a) {
                        delete vb[a]
                    });

                    function yb(a, b, c) {
                        return a >= b ? null : new VTTCue(a, b, c)
                    }
                    n("shaka.media.TextEngine.makeCue", yb);
                    ub.prototype.m = function () {
                        this.c && zb(this, function () {
                            return !0
                        });
                        this.c = this.f = null;
                        return Promise.resolve()
                    };

                    function Ab(a, b, c, d) {
                        return Promise.resolve().then(function () {
                            if (this.c)
                                if (null == c || null == d) this.f.parseInit(b);
                                else {
                                    for (var a = this.f.parseMedia(b, {
                                            periodStart: this.h,
                                            segmentStart: c,
                                            segmentEnd: d
                                        }), f = 0; f < a.length && !(a[f].startTime >= this.g); ++f) this.c.addCue(a[f]);
                                    null == this.b && (this.b = c);
                                    this.a = Math.min(d, this.g)
                                }
                        }.bind(a))
                    }
                    ub.prototype.remove = function (a, b) {
                        return Promise.resolve().then(function () {
                            this.c && (zb(this, function (c) {
                                return c.startTime >= b || c.endTime <= a ? !1 : !0
                            }), null == this.b || b <= this.b || a >= this.a || (a <= this.b && b >= this.a ? this.b = this.a = null : a <= this.b && b < this.a ? this.b = b : a > this.b && b >= this.a && (this.a = a)))
                        }.bind(this))
                    };

                    function zb(a, b) {
                        for (var c = a.c.cues, d = [], e = 0; e < c.length; ++e) b(c[e]) && d.push(c[e]);
                        for (e = 0; e < d.length; ++e) a.c.removeCue(d[e])
                    }

                    function xb(a) {
                        this.Oa = a
                    }
                    xb.prototype.parseInit = function (a) {
                        this.Oa(a, 0, null, null)
                    };
                    xb.prototype.parseMedia = function (a, b) {
                        return this.Oa(a, b.periodStart, b.segmentStart, b.segmentEnd)
                    };

                    function Bb(a) {
                        return !a || 1 == a.length && 1E-6 > a.end(0) - a.start(0) ? null : a.length ? a.end(a.length - 1) : null
                    }

                    function Cb(a, b) {
                        return !a || !a.length || 1 == a.length && 1E-6 > a.end(0) - a.start(0) ? !1 : b >= a.start(0) && b <= a.end(a.length - 1)
                    }

                    function Db(a, b) {
                        if (!a || !a.length || 1 == a.length && 1E-6 > a.end(0) - a.start(0)) return 0;
                        for (var c = 0, d = a.length - 1; 0 <= d && a.end(d) > b; --d) c += a.end(d) - Math.max(a.start(d), b);
                        return c
                    };

                    function Eb(a, b, c) {
                        this.f = a;
                        this.N = b;
                        this.i = c;
                        this.c = {};
                        this.a = null;
                        this.b = {};
                        this.g = new C;
                        this.h = !1
                    }

                    function Fb() {
                        var a = {};
                        'video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hvc1.1.6.L93.90",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="av1",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",video/mp2t; codecs="mp4a.40.2",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(",").forEach(function (b) {
                            a[b] = !!vb[b] ||
                                MediaSource.isTypeSupported(b);
                            var c = b.split(";")[0];
                            a[c] = a[c] || a[b]
                        });
                        return a
                    }
                    k = Eb.prototype;
                    k.m = function () {
                        this.h = !0;
                        var a = [],
                            b;
                        for (b in this.b) {
                            var c = this.b[b],
                                d = c[0];
                            this.b[b] = c.slice(0, 1);
                            d && a.push(d.p["catch"](y));
                            for (d = 1; d < c.length; ++d) c[d].p["catch"](y), c[d].p.reject()
                        }
                        this.a && a.push(this.a.m());
                        return Promise.all(a).then(function () {
                            this.g.m();
                            this.a = this.i = this.N = this.f = this.g = null;
                            this.c = {};
                            this.b = {}
                        }.bind(this))
                    };
                    k.init = function (a) {
                        for (var b in a) {
                            var c = a[b];
                            "text" == b ? Gb(this, c) : (c = this.N.addSourceBuffer(c), D(this.g, c, "error", this.ke.bind(this, b)), D(this.g, c, "updateend", this.Ja.bind(this, b)), this.c[b] = c, this.b[b] = [])
                        }
                    };

                    function Gb(a, b) {
                        a.a || (a.a = new ub(a.i));
                        a.a.f = new vb[b]
                    }

                    function Ib(a, b) {
                        if ("text" == b) var c = a.a.b;
                        else c = Jb(a, b), c = !c || 1 == c.length && 1E-6 > c.end(0) - c.start(0) ? null : 1 == c.length && 0 > c.start(0) ? 0 : c.length ? c.start(0) : null;
                        return c
                    }

                    function Jb(a, b) {
                        try {
                            return a.c[b].buffered
                        } catch (c) {
                            return null
                        }
                    }

                    function Kb(a, b, c, d, e) {
                        return "text" == b ? Ab(a.a, c, d, e) : Lb(a, b, a.je.bind(a, b, c))
                    }
                    k.remove = function (a, b, c) {
                        return "text" == a ? this.a.remove(b, c) : Lb(this, a, this.qc.bind(this, a, b, c))
                    };

                    function Mb(a, b) {
                        return "text" == b ? a.a.remove(0, Infinity) : Lb(a, b, a.qc.bind(a, b, 0, a.N.duration))
                    }

                    function Nb(a, b, c, d) {
                        if ("text" == b) return a.a.h = c, null != d && (a.a.g = d), Promise.resolve();
                        null == d && (d = Infinity);
                        return Promise.all([Lb(a, b, a.Ec.bind(a, b)), Lb(a, b, a.$d.bind(a, b, c)), Lb(a, b, a.Yd.bind(a, b, d))])
                    }
                    k.endOfStream = function (a) {
                        return Ob(this, function () {
                            a ? this.N.endOfStream(a) : this.N.endOfStream()
                        }.bind(this))
                    };
                    k.qa = function (a) {
                        return Ob(this, function () {
                            this.N.duration = a
                        }.bind(this))
                    };
                    k.Y = function () {
                        return this.N.duration
                    };
                    k.je = function (a, b) {
                        this.c[a].appendBuffer(b)
                    };
                    k.qc = function (a, b, c) {
                        c <= b ? this.Ja(a) : this.c[a].remove(b, c)
                    };
                    k.Ec = function (a) {
                        var b = this.c[a].appendWindowEnd;
                        this.c[a].abort();
                        this.c[a].appendWindowEnd = b;
                        this.Ja(a)
                    };
                    k.Oc = function (a) {
                        this.f.currentTime -= .001;
                        this.Ja(a)
                    };
                    k.$d = function (a, b) {
                        this.c[a].timestampOffset = b;
                        this.Ja(a)
                    };
                    k.Yd = function (a, b) {
                        this.c[a].appendWindowEnd = b + .04;
                        this.Ja(a)
                    };
                    k.ke = function (a) {
                        this.b[a][0].p.reject(new t(2, 3, 3014, this.f.error ? this.f.error.code : 0))
                    };
                    k.Ja = function (a) {
                        var b = this.b[a][0];
                        b && (b.p.resolve(), Pb(this, a))
                    };

                    function Lb(a, b, c) {
                        if (a.h) return Promise.reject();
                        c = {
                            start: c,
                            p: new A
                        };
                        a.b[b].push(c);
                        if (1 == a.b[b].length) try {
                            c.start()
                        } catch (d) {
                            "QuotaExceededError" == d.name ? c.p.reject(new t(2, 3, 3017, b)) : c.p.reject(new t(2, 3, 3015, d)), Pb(a, b)
                        }
                        return c.p
                    }

                    function Ob(a, b) {
                        if (a.h) return Promise.reject();
                        var c = [],
                            d;
                        for (d in a.c) {
                            var e = new A,
                                f = {
                                    start: function (a) {
                                        a.resolve()
                                    }.bind(null, e),
                                    p: e
                                };
                            a.b[d].push(f);
                            c.push(e);
                            1 == a.b[d].length && f.start()
                        }
                        return Promise.all(c).then(function () {
                            var a;
                            try {
                                b()
                            } catch (l) {
                                var c = Promise.reject(new t(2, 3, 3015, l))
                            }
                            for (a in this.c) Pb(this, a);
                            return c
                        }.bind(a), function () {
                            return Promise.reject()
                        }.bind(a))
                    }

                    function Pb(a, b) {
                        a.b[b].shift();
                        var c = a.b[b][0];
                        if (c) try {
                            c.start()
                        } catch (d) {
                            c.p.reject(new t(2, 3, 3015, d)), Pb(a, b)
                        }
                    };

                    function Qb(a, b, c) {
                        return c == b || a >= Rb && c == b.split("-")[0] || a >= Sb && c.split("-")[0] == b.split("-")[0] ? !0 : !1
                    }
                    var Rb = 1,
                        Sb = 2;

                    function Tb(a) {
                        a = a.toLowerCase().split("-");
                        var b = Ub[a[0]];
                        b && (a[0] = b);
                        return a.join("-")
                    }
                    var Ub = {
                        aar: "aa",
                        abk: "ab",
                        afr: "af",
                        aka: "ak",
                        alb: "sq",
                        amh: "am",
                        ara: "ar",
                        arg: "an",
                        arm: "hy",
                        asm: "as",
                        ava: "av",
                        ave: "ae",
                        aym: "ay",
                        aze: "az",
                        bak: "ba",
                        bam: "bm",
                        baq: "eu",
                        bel: "be",
                        ben: "bn",
                        bih: "bh",
                        bis: "bi",
                        bod: "bo",
                        bos: "bs",
                        bre: "br",
                        bul: "bg",
                        bur: "my",
                        cat: "ca",
                        ces: "cs",
                        cha: "ch",
                        che: "ce",
                        chi: "zh",
                        chu: "cu",
                        chv: "cv",
                        cor: "kw",
                        cos: "co",
                        cre: "cr",
                        cym: "cy",
                        cze: "cs",
                        dan: "da",
                        deu: "de",
                        div: "dv",
                        dut: "nl",
                        dzo: "dz",
                        ell: "el",
                        eng: "en",
                        epo: "eo",
                        est: "et",
                        eus: "eu",
                        ewe: "ee",
                        fao: "fo",
                        fas: "fa",
                        fij: "fj",
                        fin: "fi",
                        fra: "fr",
                        fre: "fr",
                        fry: "fy",
                        ful: "ff",
                        geo: "ka",
                        ger: "de",
                        gla: "gd",
                        gle: "ga",
                        glg: "gl",
                        glv: "gv",
                        gre: "el",
                        grn: "gn",
                        guj: "gu",
                        hat: "ht",
                        hau: "ha",
                        heb: "he",
                        her: "hz",
                        hin: "hi",
                        hmo: "ho",
                        hrv: "hr",
                        hun: "hu",
                        hye: "hy",
                        ibo: "ig",
                        ice: "is",
                        ido: "io",
                        iii: "ii",
                        iku: "iu",
                        ile: "ie",
                        ina: "ia",
                        ind: "id",
                        ipk: "ik",
                        isl: "is",
                        ita: "it",
                        jav: "jv",
                        jpn: "ja",
                        kal: "kl",
                        kan: "kn",
                        kas: "ks",
                        kat: "ka",
                        kau: "kr",
                        kaz: "kk",
                        khm: "km",
                        kik: "ki",
                        kin: "rw",
                        kir: "ky",
                        kom: "kv",
                        kon: "kg",
                        kor: "ko",
                        kua: "kj",
                        kur: "ku",
                        lao: "lo",
                        lat: "la",
                        lav: "lv",
                        lim: "li",
                        lin: "ln",
                        lit: "lt",
                        ltz: "lb",
                        lub: "lu",
                        lug: "lg",
                        mac: "mk",
                        mah: "mh",
                        mal: "ml",
                        mao: "mi",
                        mar: "mr",
                        may: "ms",
                        mkd: "mk",
                        mlg: "mg",
                        mlt: "mt",
                        mon: "mn",
                        mri: "mi",
                        msa: "ms",
                        mya: "my",
                        nau: "na",
                        nav: "nv",
                        nbl: "nr",
                        nde: "nd",
                        ndo: "ng",
                        nep: "ne",
                        nld: "nl",
                        nno: "nn",
                        nob: "nb",
                        nor: "no",
                        nya: "ny",
                        oci: "oc",
                        oji: "oj",
                        ori: "or",
                        orm: "om",
                        oss: "os",
                        pan: "pa",
                        per: "fa",
                        pli: "pi",
                        pol: "pl",
                        por: "pt",
                        pus: "ps",
                        que: "qu",
                        roh: "rm",
                        ron: "ro",
                        rum: "ro",
                        run: "rn",
                        rus: "ru",
                        sag: "sg",
                        san: "sa",
                        sin: "si",
                        slk: "sk",
                        slo: "sk",
                        slv: "sl",
                        sme: "se",
                        smo: "sm",
                        sna: "sn",
                        snd: "sd",
                        som: "so",
                        sot: "st",
                        spa: "es",
                        sqi: "sq",
                        srd: "sc",
                        srp: "sr",
                        ssw: "ss",
                        sun: "su",
                        swa: "sw",
                        swe: "sv",
                        tah: "ty",
                        tam: "ta",
                        tat: "tt",
                        tel: "te",
                        tgk: "tg",
                        tgl: "tl",
                        tha: "th",
                        tib: "bo",
                        tir: "ti",
                        ton: "to",
                        tsn: "tn",
                        tso: "ts",
                        tuk: "tk",
                        tur: "tr",
                        twi: "tw",
                        uig: "ug",
                        ukr: "uk",
                        urd: "ur",
                        uzb: "uz",
                        ven: "ve",
                        vie: "vi",
                        vol: "vo",
                        wel: "cy",
                        wln: "wa",
                        wol: "wo",
                        xho: "xh",
                        yid: "yi",
                        yor: "yo",
                        zha: "za",
                        zho: "zh",
                        zul: "zu"
                    };

                    function Vb(a, b, c) {
                        var d = a.video;
                        return d && (d.width < b.minWidth || d.width > b.maxWidth || d.width > c.width || d.height < b.minHeight || d.height > b.maxHeight || d.height > c.height || d.width * d.height < b.minPixels || d.width * d.height > b.maxPixels) || a.bandwidth < b.minBandwidth || a.bandwidth > b.maxBandwidth ? !1 : !0
                    }

                    function Wb(a, b, c) {
                        var d = !1;
                        a.variants.forEach(function (a) {
                            var e = a.allowedByApplication;
                            a.allowedByApplication = Vb(a, b, c);
                            e != a.allowedByApplication && (d = !0)
                        });
                        return d
                    }

                    function Xb(a, b, c) {
                        var d = b.video,
                            e = b.audio;
                        for (b = 0; b < c.variants.length; ++b) {
                            var f = c.variants[b],
                                g = a,
                                h = e,
                                l = d;
                            (g && g.J && !sb(g, f) ? 0 : Yb(f.audio, g, h) && Yb(f.video, g, l)) || (c.variants.splice(b, 1), --b)
                        }
                        for (b = 0; b < c.textStreams.length; ++b) a = c.textStreams[b], vb[Zb(a.mimeType, a.codecs)] || (c.textStreams.splice(b, 1), --b)
                    }

                    function Yb(a, b, c) {
                        if (!a) return !0;
                        var d = null;
                        b && b.J && (d = b.v);
                        b = Zb(a.mimeType, a.codecs);
                        return !vb[b] && !MediaSource.isTypeSupported(b) || d && a.encrypted && 0 > d.indexOf(b) || c && (a.mimeType != c.mimeType || a.codecs.split(".")[0] != c.codecs.split(".")[0]) ? !1 : !0
                    }

                    function $b(a, b, c) {
                        var d = null;
                        return ac(a.variants).map(function (a) {
                            var e;
                            a.video && a.audio ? e = c == a.video.id && b == a.audio.id : e = a.video && c == a.video.id || a.audio && b == a.audio.id;
                            var g = "";
                            a.video && (g += a.video.codecs);
                            a.audio && ("" != g && (g += ", "), g += a.audio.codecs, d = a.audio.label);
                            var h = a.audio ? a.audio.codecs : null,
                                l = a.video ? a.video.codecs : null,
                                m = null;
                            a.video ? m = a.video.mimeType : a.audio && (m = a.audio.mimeType);
                            var q = null;
                            a.audio ? q = a.audio.kind : a.video && (q = a.video.kind);
                            var r = Ha((a.audio ? a.audio.roles : []).concat(a.video ?
                                a.video.roles : []));
                            return {
                                id: a.id,
                                active: e,
                                type: "variant",
                                bandwidth: a.bandwidth,
                                language: a.language,
                                label: d,
                                kind: q || null,
                                width: a.video ? a.video.width : null,
                                height: a.video ? a.video.height : null,
                                frameRate: a.video ? a.video.frameRate : void 0,
                                mimeType: m,
                                codecs: g,
                                audioCodec: h,
                                videoCodec: l,
                                primary: a.primary,
                                roles: r,
                                videoId: a.video ? a.video.id : null,
                                audioId: a.audio ? a.audio.id : null
                            }
                        })
                    }

                    function bc(a, b) {
                        return a.textStreams.map(function (a) {
                            return {
                                id: a.id,
                                active: b == a.id,
                                type: "text",
                                language: a.language,
                                label: a.label,
                                kind: a.kind,
                                mimeType: a.mimeType,
                                codecs: a.codecs || null,
                                audioCodec: null,
                                videoCodec: null,
                                primary: a.primary,
                                roles: a.roles
                            }
                        })
                    }

                    function cc(a, b) {
                        for (var c = 0; c < a.variants.length; c++)
                            if (a.variants[c].id == b.id) return a.variants[c];
                        return null
                    }

                    function dc(a, b) {
                        for (var c = 0; c < a.textStreams.length; c++)
                            if (a.textStreams[c].id == b.id) return a.textStreams[c];
                        return null
                    }

                    function ac(a) {
                        return a.filter(function (a) {
                            return a.allowedByApplication && a.allowedByKeySystem
                        })
                    }

                    function ec(a, b, c, d) {
                        var e = ac(a.variants),
                            f = e.filter(function (a) {
                                return a.language == e[0].language
                            });
                        a = e.filter(function (a) {
                            return a.primary
                        });
                        a.length && (f = a);
                        if (b) {
                            var g = Tb(b);
                            [Sb, Rb, 0].forEach(function (a) {
                                var b = !1;
                                e.forEach(function (d) {
                                    g = Tb(g);
                                    var e = Tb(d.language);
                                    Qb(a, g, e) && (b ? f.push(d) : (f = [d], b = !0), c && (c.audio = !0))
                                })
                            })
                        }
                        var h = d || "";
                        return h && (b = f.filter(function (a) {
                            return a.audio && -1 < a.audio.roles.indexOf(h) || a.video && -1 < a.video.roles.indexOf(h)
                        }), b.length) ? b : f
                    }

                    function fc(a, b, c, d) {
                        var e = a.textStreams,
                            f = e;
                        a = e.filter(function (a) {
                            return a.primary
                        });
                        a.length && (f = a);
                        if (b) {
                            var g = Tb(b);
                            [Sb, Rb, 0].forEach(function (a) {
                                var b = !1;
                                e.forEach(function (d) {
                                    var e = Tb(d.language);
                                    Qb(a, g, e) && (b ? f.push(d) : (f = [d], b = !0), c && (c.text = !0))
                                })
                            })
                        }
                        var h = d || "";
                        return h && (b = f.filter(function (a) {
                            return a && -1 < a.roles.indexOf(h)
                        }), b.length) ? b : f
                    }

                    function gc(a, b, c) {
                        for (var d = 0; d < c.length; d++)
                            if (c[d].audio == a && c[d].video == b) return c[d];
                        return null
                    }

                    function hc(a, b, c) {
                        function d(a, b) {
                            return null == a ? null == b : b.id == a
                        }
                        for (var e = 0; e < c.length; e++)
                            if (d(a, c[e].audio) && d(b, c[e].video)) return c[e];
                        return null
                    }

                    function Zb(a, b) {
                        var c = a;
                        b && (c += '; codecs="' + b + '"');
                        return c
                    }

                    function ic(a, b) {
                        for (var c = a.periods.length - 1; 0 < c; --c)
                            if (b + Ba >= a.periods[c].startTime) return c;
                        return 0
                    }

                    function jc(a, b) {
                        for (var c = 0; c < a.periods.length; ++c) {
                            var d = a.periods[c];
                            if ("text" == b.type)
                                for (var e = 0; e < d.textStreams.length; ++e) {
                                    if (d.textStreams[e] == b) return c
                                } else
                                    for (e = 0; e < d.variants.length; ++e) {
                                        var f = d.variants[e];
                                        if (f.audio == b || f.video == b || f.video && f.video.trickModeVideo == b) return c
                                    }
                        }
                        return -1
                    };

                    function F() {
                        this.f = null;
                        this.b = !1;
                        this.a = new fa;
                        this.h = [];
                        this.g = [];
                        this.j = !1;
                        this.c = null;
                        this.i = {
                            minWidth: 0,
                            maxWidth: Infinity,
                            minHeight: 0,
                            maxHeight: Infinity,
                            minPixels: 0,
                            maxPixels: Infinity,
                            minBandwidth: 0,
                            maxBandwidth: Infinity
                        }
                    }
                    n("shaka.abr.SimpleAbrManager", F);
                    F.prototype.stop = function () {
                        this.f = null;
                        this.b = !1;
                        this.h = [];
                        this.g = [];
                        this.c = null
                    };
                    F.prototype.stop = F.prototype.stop;
                    F.prototype.init = function (a) {
                        this.f = a
                    };
                    F.prototype.init = F.prototype.init;
                    F.prototype.chooseStreams = function (a) {
                        var b = {};
                        if (-1 < a.indexOf("audio") || -1 < a.indexOf("video")) {
                            var c = this.h;
                            var d = kc(this.i, c);
                            var e = this.a.getBandwidthEstimate();
                            if (c.length && !d.length) throw new t(2, 4, 4012);
                            for (var c = d[0], f = 0; f < d.length; ++f) {
                                var g = d[f],
                                    h = (d[f + 1] || {
                                        bandwidth: Infinity
                                    }).bandwidth / .85;
                                e >= g.bandwidth / .95 && e <= h && (c = g)
                            }(d = c) && d.video && (b.video = d.video);
                            d && d.audio && (b.audio = d.audio)
                        } - 1 < a.indexOf("text") && (b.text = this.g[0]);
                        this.c = Date.now();
                        return b
                    };
                    F.prototype.chooseStreams = F.prototype.chooseStreams;
                    F.prototype.enable = function () {
                        this.b = !0
                    };
                    F.prototype.enable = F.prototype.enable;
                    F.prototype.disable = function () {
                        this.b = !1
                    };
                    F.prototype.disable = F.prototype.disable;
                    F.prototype.segmentDownloaded = function (a, b) {
                        var c = this.a;
                        if (!(16E3 > b)) {
                            var d = 8E3 * b / a,
                                e = a / 1E3;
                            c.a += b;
                            da(c.c, e, d);
                            da(c.f, e, d)
                        }
                        if (null != this.c && this.b) a: {
                            if (!this.j) {
                                if (!(128E3 <= this.a.a)) break a;
                                this.j = !0
                            } else if (8E3 > Date.now() - this.c) break a;c = this.chooseStreams(["audio", "video"]);this.a.getBandwidthEstimate();this.f(c)
                        }
                    };
                    F.prototype.segmentDownloaded = F.prototype.segmentDownloaded;
                    F.prototype.getBandwidthEstimate = function () {
                        return this.a.getBandwidthEstimate()
                    };
                    F.prototype.getBandwidthEstimate = F.prototype.getBandwidthEstimate;
                    F.prototype.setDefaultEstimate = function (a) {
                        this.a.setDefaultEstimate(a)
                    };
                    F.prototype.setDefaultEstimate = F.prototype.setDefaultEstimate;
                    F.prototype.setRestrictions = function (a) {
                        this.i = a
                    };
                    F.prototype.setRestrictions = F.prototype.setRestrictions;
                    F.prototype.setVariants = function (a) {
                        this.h = a
                    };
                    F.prototype.setVariants = F.prototype.setVariants;
                    F.prototype.setTextStreams = function (a) {
                        this.g = a
                    };
                    F.prototype.setTextStreams = F.prototype.setTextStreams;

                    function kc(a, b) {
                        return b.filter(function (b) {
                            return Vb(b, a, {
                                width: Infinity,
                                height: Infinity
                            })
                        }).sort(function (a, b) {
                            return a.bandwidth - b.bandwidth
                        })
                    };

                    function G(a, b) {
                        var c = b || {},
                            d;
                        for (d in c) this[d] = c[d];
                        this.defaultPrevented = this.cancelable = this.bubbles = !1;
                        this.timeStamp = window.performance && window.performance.now ? window.performance.now() : Date.now();
                        this.type = a;
                        this.isTrusted = !1;
                        this.target = this.currentTarget = null;
                        this.a = !1
                    }
                    G.prototype.preventDefault = function () {
                        this.cancelable && (this.defaultPrevented = !0)
                    };
                    G.prototype.stopImmediatePropagation = function () {
                        this.a = !0
                    };
                    G.prototype.stopPropagation = function () {};
                    var lc = "ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),
                        mc = "buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),
                        nc = ["loop", "playbackRate"],
                        oc = ["pause", "play"],
                        pc = "adaptation buffering emsg error loading unloading texttrackvisibility timelineregionadded timelineregionenter timelineregionexit trackschanged".split(" "),
                        qc = "drmInfo getAudioLanguages getConfiguration getExpiration getManifestUri getPlaybackRate getPlayheadTimeAsDate getTextLanguages getTextTracks getTracks getStats getVariantTracks isBuffering isInProgress isLive isTextTrackVisible keySystem seekRange".split(" "),
                        rc = [["getConfiguration", "configure"]],
                        sc = [["isTextTrackVisible", "setTextTrackVisibility"]],
                        vc = "addTextTrack cancelTrickPlay configure resetConfiguration selectAudioLanguage selectTextLanguage selectTextTrack selectTrack selectVariantTrack setTextTrackVisibility trickPlay".split(" "),
                        wc = ["load", "unload"];

                    function xc(a) {
                        return JSON.stringify(a, function (a, c) {
                            if ("manager" != a && "function" != typeof c) {
                                if (c instanceof Event || c instanceof G) {
                                    var b = {},
                                        e;
                                    for (e in c) {
                                        var f = c[e];
                                        f && "object" == typeof f || e in Event || (b[e] = f)
                                    }
                                    return b
                                }
                                if (c instanceof TimeRanges)
                                    for (b = {
                                            __type__: "TimeRanges",
                                            length: c.length,
                                            start: [],
                                            end: []
                                        }, e = 0; e < c.length; ++e) b.start.push(c.start(e)), b.end.push(c.end(e));
                                else b = "number" == typeof c ? isNaN(c) ? "NaN" : isFinite(c) ? c : 0 > c ? "-Infinity" : "Infinity" : c;
                                return b
                            }
                        })
                    }

                    function yc(a) {
                        return JSON.parse(a, function (a, c) {
                            return "NaN" == c ? NaN : "-Infinity" == c ? -Infinity : "Infinity" == c ? Infinity : c && "object" == typeof c && "TimeRanges" == c.__type__ ? zc(c) : c
                        })
                    }

                    function zc(a) {
                        return {
                            length: a.length,
                            start: function (b) {
                                return a.start[b]
                            },
                            end: function (b) {
                                return a.end[b]
                            }
                        }
                    };

                    function Ac(a, b, c, d, e) {
                        this.J = a;
                        this.l = b;
                        this.B = c;
                        this.G = d;
                        this.v = e;
                        this.c = this.j = this.h = !1;
                        this.A = "";
                        this.a = this.i = null;
                        this.b = {
                            video: {},
                            player: {}
                        };
                        this.o = 0;
                        this.f = {};
                        this.g = null
                    }
                    k = Ac.prototype;
                    k.m = function () {
                        Bc(this);
                        this.a && (this.a.leave(function () {}, function () {}), this.a = null);
                        this.G = this.B = this.l = null;
                        this.c = this.j = this.h = !1;
                        this.g = this.f = this.b = this.i = null;
                        return Promise.resolve()
                    };
                    k.V = function () {
                        return this.c
                    };
                    k.Fb = function () {
                        return this.A
                    };
                    k.init = function () {
                        if (window.chrome && chrome.cast && chrome.cast.isAvailable) {
                            delete window.__onGCastApiAvailable;
                            this.h = !0;
                            this.l();
                            var a = new chrome.cast.SessionRequest(this.J),
                                a = new chrome.cast.ApiConfig(a, this.gd.bind(this), this.sd.bind(this), "origin_scoped");
                            chrome.cast.initialize(a, function () {}, function () {})
                        } else window.__onGCastApiAvailable = function (a) {
                            a && this.init()
                        }.bind(this)
                    };
                    k.Ib = function (a) {
                        this.i = a;
                        this.c && Cc(this, {
                            type: "appData",
                            appData: this.i
                        })
                    };
                    k.cast = function (a) {
                        if (!this.h) return Promise.reject(new t(1, 8, 8E3));
                        if (!this.j) return Promise.reject(new t(1, 8, 8001));
                        if (this.c) return Promise.reject(new t(1, 8, 8002));
                        this.g = new A;
                        chrome.cast.requestSession(this.Bb.bind(this, a), this.cc.bind(this));
                        return this.g
                    };
                    k.ab = function () {
                        this.c && (Bc(this), this.a && (this.a.stop(function () {}, function () {}), this.a = null))
                    };
                    k.get = function (a, b) {
                        if ("video" == a) {
                            if (0 <= oc.indexOf(b)) return this.pc.bind(this, a, b)
                        } else if ("player" == a) {
                            if (0 <= vc.indexOf(b)) return this.pc.bind(this, a, b);
                            if (0 <= wc.indexOf(b)) return this.Pd.bind(this, a, b);
                            if (0 <= qc.indexOf(b)) return this.lc.bind(this, a, b)
                        }
                        return this.lc(a, b)
                    };
                    k.set = function (a, b, c) {
                        this.b[a][b] = c;
                        Cc(this, {
                            type: "set",
                            targetName: a,
                            property: b,
                            value: c
                        })
                    };
                    k.Bb = function (a, b) {
                        this.a = b;
                        this.a.addUpdateListener(this.dc.bind(this));
                        this.a.addMessageListener("urn:x-cast:com.google.shaka.v2", this.md.bind(this));
                        this.dc();
                        Cc(this, {
                            type: "init",
                            initState: a,
                            appData: this.i
                        });
                        this.g.resolve()
                    };
                    k.cc = function (a) {
                        var b = 8003;
                        switch (a.code) {
                            case "cancel":
                                b = 8004;
                                break;
                            case "timeout":
                                b = 8005;
                                break;
                            case "receiver_unavailable":
                                b = 8006
                        }
                        this.g.reject(new t(2, 8, b, a))
                    };
                    k.lc = function (a, b) {
                        return this.b[a][b]
                    };
                    k.pc = function (a, b) {
                        Cc(this, {
                            type: "call",
                            targetName: a,
                            methodName: b,
                            args: Array.prototype.slice.call(arguments, 2)
                        })
                    };
                    k.Pd = function (a, b) {
                        var c = Array.prototype.slice.call(arguments, 2),
                            d = new A,
                            e = this.o.toString();
                        this.o++;
                        this.f[e] = d;
                        Cc(this, {
                            type: "asyncCall",
                            targetName: a,
                            methodName: b,
                            args: c,
                            id: e
                        });
                        return d
                    };
                    k.gd = function (a) {
                        var b = this.v();
                        this.g = new A;
                        this.Bb(b, a)
                    };
                    k.sd = function (a) {
                        this.j = "available" == a;
                        this.l()
                    };
                    k.dc = function () {
                        var a = this.a ? "connected" == this.a.status : !1;
                        if (this.c && !a) {
                            this.G();
                            for (var b in this.b) this.b[b] = {};
                            Bc(this)
                        }
                        this.A = (this.c = a) ? this.a.receiver.friendlyName : "";
                        this.l()
                    };

                    function Bc(a) {
                        for (var b in a.f) {
                            var c = a.f[b];
                            delete a.f[b];
                            c.reject(new t(1, 7, 7E3))
                        }
                    }
                    k.md = function (a, b) {
                        var c = yc(b);
                        switch (c.type) {
                            case "event":
                                var d = c.targetName,
                                    e = c.event;
                                this.B(d, new G(e.type, e));
                                break;
                            case "update":
                                e = c.update;
                                for (d in e) {
                                    var c = this.b[d] || {};
                                    for (f in e[d]) c[f] = e[d][f]
                                }
                                break;
                            case "asyncComplete":
                                d = c.id;
                                var f = c.error;
                                c = this.f[d];
                                delete this.f[d];
                                if (c)
                                    if (f) {
                                        d = new t(f.severity, f.category, f.code);
                                        for (e in f) d[e] = f[e];
                                        c.reject(d)
                                    } else c.resolve()
                        }
                    };

                    function Cc(a, b) {
                        var c = xc(b);
                        a.a.sendMessage("urn:x-cast:com.google.shaka.v2", c, function () {}, ga)
                    };

                    function p() {
                        this.nb = new Ja;
                        this.Ua = this
                    }
                    p.prototype.addEventListener = function (a, b) {
                        this.nb.push(a, b)
                    };
                    p.prototype.removeEventListener = function (a, b) {
                        this.nb.remove(a, b)
                    };
                    p.prototype.dispatchEvent = function (a) {
                        for (var b = this.nb.get(a.type) || [], c = 0; c < b.length; ++c) {
                            a.target = this.Ua;
                            a.currentTarget = this.Ua;
                            var d = b[c];
                            try {
                                d.handleEvent ? d.handleEvent(a) : d.call(this, a)
                            } catch (e) {}
                            if (a.a) break
                        }
                        return a.defaultPrevented
                    };

                    function H(a, b, c) {
                        p.call(this);
                        this.c = a;
                        this.b = b;
                        this.h = this.f = this.g = this.i = this.j = null;
                        this.a = new Ac(c, this.fe.bind(this), this.ge.bind(this), this.he.bind(this), this.Vb.bind(this));
                        Dc(this)
                    }
                    ba(H);
                    n("shaka.cast.CastProxy", H);
                    H.prototype.m = function (a) {
                        a && this.a && this.a.ab();
                        a = [this.h ? this.h.m() : null, this.b ? this.b.m() : null, this.a ? this.a.m() : null];
                        this.a = this.h = this.i = this.j = this.b = this.c = null;
                        return Promise.all(a)
                    };
                    H.prototype.destroy = H.prototype.m;
                    H.prototype.Zc = function () {
                        return this.j
                    };
                    H.prototype.getVideo = H.prototype.Zc;
                    H.prototype.Tc = function () {
                        return this.i
                    };
                    H.prototype.getPlayer = H.prototype.Tc;
                    H.prototype.Fc = function () {
                        return this.a ? this.a.h && this.a.j : !1
                    };
                    H.prototype.canCast = H.prototype.Fc;
                    H.prototype.V = function () {
                        return this.a ? this.a.V() : !1
                    };
                    H.prototype.isCasting = H.prototype.V;
                    H.prototype.Fb = function () {
                        return this.a ? this.a.Fb() : ""
                    };
                    H.prototype.receiverName = H.prototype.Fb;
                    H.prototype.cast = function () {
                        var a = this.Vb();
                        return this.a.cast(a).then(function () {
                            return this.b.ib()
                        }.bind(this))
                    };
                    H.prototype.cast = H.prototype.cast;
                    H.prototype.Ib = function (a) {
                        this.a.Ib(a)
                    };
                    H.prototype.setAppData = H.prototype.Ib;
                    H.prototype.ne = function () {
                        var a = this.a;
                        if (a.c) {
                            var b = a.v();
                            chrome.cast.requestSession(a.Bb.bind(a, b), a.cc.bind(a))
                        }
                    };
                    H.prototype.suggestDisconnect = H.prototype.ne;
                    H.prototype.ab = function () {
                        this.a.ab()
                    };
                    H.prototype.forceDisconnect = H.prototype.ab;

                    function Dc(a) {
                        a.a.init();
                        a.h = new C;
                        lc.forEach(function (a) {
                            D(this.h, this.c, a, this.ue.bind(this))
                        }.bind(a));
                        pc.forEach(function (a) {
                            D(this.h, this.b, a, this.Id.bind(this))
                        }.bind(a));
                        a.j = {};
                        for (var b in a.c) Object.defineProperty(a.j, b, {
                            configurable: !1,
                            enumerable: !0,
                            get: a.te.bind(a, b),
                            set: a.ve.bind(a, b)
                        });
                        a.i = {};
                        for (b in a.b) Object.defineProperty(a.i, b, {
                            configurable: !1,
                            enumerable: !0,
                            get: a.Hd.bind(a, b)
                        });
                        a.g = new p;
                        a.g.Ua = a.j;
                        a.f = new p;
                        a.f.Ua = a.i
                    }
                    k = H.prototype;
                    k.Vb = function () {
                        var a = {
                            video: {},
                            player: {},
                            playerAfterLoad: {},
                            manifest: this.b.Za,
                            startTime: null
                        };
                        this.c.pause();
                        nc.forEach(function (b) {
                            a.video[b] = this.c[b]
                        }.bind(this));
                        this.c.ended || (a.startTime = this.c.currentTime);
                        rc.forEach(function (b) {
                            var c = b[1];
                            b = this.b[b[0]]();
                            a.player[c] = b
                        }.bind(this));
                        sc.forEach(function (b) {
                            var c = b[1];
                            b = this.b[b[0]]();
                            a.playerAfterLoad[c] = b
                        }.bind(this));
                        return a
                    };
                    k.fe = function () {
                        this.dispatchEvent(new G("caststatuschanged"))
                    };
                    k.he = function () {
                        rc.forEach(function (a) {
                            var b = a[1];
                            a = this.a.get("player", a[0])();
                            this.b[b](a)
                        }.bind(this));
                        var a = this.a.get("player", "getManifestUri")(),
                            b = this.a.get("video", "ended"),
                            c = Promise.resolve(),
                            d = this.c.autoplay,
                            e = null;
                        b || (e = this.a.get("video", "currentTime"));
                        a && (this.c.autoplay = !1, c = this.b.load(a, e), c["catch"](function (a) {
                            this.b.dispatchEvent(new G("error", {
                                detail: a
                            }))
                        }.bind(this)));
                        var f = {};
                        nc.forEach(function (a) {
                            f[a] = this.a.get("video", a)
                        }.bind(this));
                        c.then(function () {
                            nc.forEach(function (a) {
                                this.c[a] =
                                    f[a]
                            }.bind(this));
                            sc.forEach(function (a) {
                                var b = a[1];
                                a = this.a.get("player", a[0])();
                                this.b[b](a)
                            }.bind(this));
                            this.c.autoplay = d;
                            a && this.c.play()
                        }.bind(this))
                    };
                    k.te = function (a) {
                        if ("addEventListener" == a) return this.g.addEventListener.bind(this.g);
                        if ("removeEventListener" == a) return this.g.removeEventListener.bind(this.g);
                        if (this.a.V() && !Object.keys(this.a.b.video).length) {
                            var b = this.c[a];
                            if ("function" != typeof b) return b
                        }
                        return this.a.V() ? this.a.get("video", a) : (b = this.c[a], "function" == typeof b && (b = b.bind(this.c)), b)
                    };
                    k.ve = function (a, b) {
                        this.a.V() ? this.a.set("video", a, b) : this.c[a] = b
                    };
                    k.ue = function (a) {
                        this.a.V() || this.g.dispatchEvent(new G(a.type, a))
                    };
                    k.Hd = function (a) {
                        return "addEventListener" == a ? this.f.addEventListener.bind(this.f) : "removeEventListener" == a ? this.f.removeEventListener.bind(this.f) : "getNetworkingEngine" == a ? this.b.Wb.bind(this.b) : this.a.V() && !Object.keys(this.a.b.video).length && 0 <= qc.indexOf(a) || !this.a.V() ? (a = this.b[a], a.bind(this.b)) : this.a.get("player", a)
                    };
                    k.Id = function (a) {
                        this.a.V() || this.f.dispatchEvent(a)
                    };
                    k.ge = function (a, b) {
                        this.a.V() && ("video" == a ? this.g.dispatchEvent(b) : "player" == a && this.f.dispatchEvent(b))
                    };

                    function I(a, b, c, d) {
                        p.call(this);
                        this.a = a;
                        this.b = b;
                        this.j = {
                            video: a,
                            player: b
                        };
                        this.l = c || function () {};
                        this.o = d || function (a) {
                            return a
                        };
                        this.i = !1;
                        this.f = !0;
                        this.h = this.g = this.c = null;
                        Ec(this)
                    }
                    ba(I);
                    n("shaka.cast.CastReceiver", I);
                    I.prototype.isConnected = function () {
                        return this.i
                    };
                    I.prototype.isConnected = I.prototype.isConnected;
                    I.prototype.ad = function () {
                        return this.f
                    };
                    I.prototype.isIdle = I.prototype.ad;
                    I.prototype.m = function () {
                        var a = this.b ? this.b.m() : Promise.resolve();
                        null != this.h && window.clearTimeout(this.h);
                        this.l = this.j = this.b = this.a = null;
                        this.i = !1;
                        this.f = !0;
                        this.h = this.g = this.c = null;
                        return a.then(function () {
                            cast.receiver.CastReceiverManager.getInstance().stop()
                        })
                    };
                    I.prototype.destroy = I.prototype.m;

                    function Ec(a) {
                        var b = cast.receiver.CastReceiverManager.getInstance();
                        b.onSenderConnected = a.jc.bind(a);
                        b.onSenderDisconnected = a.jc.bind(a);
                        b.onSystemVolumeChanged = a.Mc.bind(a);
                        a.g = b.getCastMessageBus("urn:x-cast:com.google.cast.media");
                        a.g.onMessage = a.hd.bind(a);
                        a.c = b.getCastMessageBus("urn:x-cast:com.google.shaka.v2");
                        a.c.onMessage = a.vd.bind(a);
                        b.start();
                        lc.forEach(function (a) {
                            this.a.addEventListener(a, this.mc.bind(this, "video"))
                        }.bind(a));
                        pc.forEach(function (a) {
                            this.b.addEventListener(a, this.mc.bind(this,
                                "player"))
                        }.bind(a));
                        cast.__platform__ && cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160') ? a.b.Jb(3840, 2160) : a.b.Jb(1920, 1080);
                        a.b.addEventListener("loading", function () {
                            this.f = !1;
                            Fc(this)
                        }.bind(a));
                        a.a.addEventListener("playing", function () {
                            this.f = !1;
                            Fc(this)
                        }.bind(a));
                        a.a.addEventListener("pause", function () {
                            Fc(this)
                        }.bind(a));
                        a.b.addEventListener("unloading", function () {
                            this.f = !0;
                            Fc(this)
                        }.bind(a));
                        a.a.addEventListener("ended", function () {
                            window.setTimeout(function () {
                                this.a &&
                                    this.a.ended && (this.f = !0, Fc(this))
                            }.bind(this), 5E3)
                        }.bind(a))
                    }
                    k = I.prototype;
                    k.jc = function () {
                        this.i = !!cast.receiver.CastReceiverManager.getInstance().getSenders().length;
                        Fc(this)
                    };

                    function Fc(a) {
                        Promise.resolve().then(function () {
                            this.dispatchEvent(new G("caststatuschanged"));
                            Gc(this, 0)
                        }.bind(a))
                    }

                    function Hc(a, b, c) {
                        for (var d in b.player) a.b[d](b.player[d]);
                        a.l(c);
                        c = Promise.resolve();
                        var e = a.a.autoplay;
                        b.manifest && (a.a.autoplay = !1, c = a.b.load(b.manifest, b.startTime), c["catch"](function (a) {
                            this.b.dispatchEvent(new G("error", {
                                detail: a
                            }))
                        }.bind(a)));
                        c.then(function () {
                            var a;
                            for (a in b.video) {
                                var c = b.video[a];
                                this.a[a] = c
                            }
                            for (a in b.playerAfterLoad) c = b.playerAfterLoad[a], this.b[a](c);
                            this.a.autoplay = e;
                            b.manifest && (this.a.play(), Gc(this, 0))
                        }.bind(a))
                    }
                    k.mc = function (a, b) {
                        this.Cb();
                        Ic(this, {
                            type: "event",
                            targetName: a,
                            event: b
                        }, this.c)
                    };
                    k.Cb = function () {
                        null != this.h && window.clearTimeout(this.h);
                        this.h = window.setTimeout(this.Cb.bind(this), 500);
                        var a = {
                            video: {},
                            player: {}
                        };
                        mc.forEach(function (b) {
                            a.video[b] = this.a[b]
                        }.bind(this));
                        qc.forEach(function (b) {
                            a.player[b] = this.b[b]()
                        }.bind(this));
                        var b = cast.receiver.CastReceiverManager.getInstance().getSystemVolume();
                        b && (a.video.volume = b.level, a.video.muted = b.muted);
                        Ic(this, {
                            type: "update",
                            update: a
                        }, this.c)
                    };
                    k.Mc = function () {
                        var a = cast.receiver.CastReceiverManager.getInstance().getSystemVolume();
                        a && Ic(this, {
                            type: "update",
                            update: {
                                video: {
                                    volume: a.level,
                                    muted: a.muted
                                }
                            }
                        }, this.c);
                        Ic(this, {
                            type: "event",
                            targetName: "video",
                            event: {
                                type: "volumechange"
                            }
                        }, this.c)
                    };
                    k.vd = function (a) {
                        var b = yc(a.data);
                        switch (b.type) {
                            case "init":
                                Hc(this, b.initState, b.appData);
                                this.Cb();
                                break;
                            case "appData":
                                this.l(b.appData);
                                break;
                            case "set":
                                var c = b.targetName,
                                    d = b.property,
                                    e = b.value;
                                if ("video" == c)
                                    if (b = cast.receiver.CastReceiverManager.getInstance(), "volume" == d) {
                                        b.setSystemVolumeLevel(e);
                                        break
                                    } else if ("muted" == d) {
                                    b.setSystemVolumeMuted(e);
                                    break
                                }
                                this.j[c][d] = e;
                                break;
                            case "call":
                                c = b.targetName;
                                d = b.methodName;
                                e = b.args;
                                c = this.j[c];
                                c[d].apply(c, e);
                                break;
                            case "asyncCall":
                                c = b.targetName,
                                    d = b.methodName, e = b.args, b = b.id, a = a.senderId, c = this.j[c], c[d].apply(c, e).then(this.vc.bind(this, a, b, null), this.vc.bind(this, a, b))
                        }
                    };
                    k.hd = function (a) {
                        var b = yc(a.data);
                        switch (b.type) {
                            case "PLAY":
                                this.a.play();
                                Gc(this, 0);
                                break;
                            case "PAUSE":
                                this.a.pause();
                                Gc(this, 0);
                                break;
                            case "SEEK":
                                a = b.currentTime;
                                var c = b.resumeState;
                                null != a && (this.a.currentTime = Number(a));
                                c && "PLAYBACK_START" == c ? (this.a.play(), Gc(this, 0)) : c && "PLAYBACK_PAUSE" == c && (this.a.pause(), Gc(this, 0));
                                break;
                            case "STOP":
                                this.b.ib().then(function () {
                                    Gc(this, 0)
                                }.bind(this));
                                break;
                            case "GET_STATUS":
                                Gc(this, Number(b.requestId));
                                break;
                            case "VOLUME":
                                c = b.volume;
                                a = c.level;
                                var c = c.muted,
                                    d = this.a.volume,
                                    e = this.a.muted;
                                null != a && (this.a.volume = Number(a));
                                null != c && (this.a.muted = c);
                                d == this.a.volume && e == this.a.muted || Gc(this, 0);
                                break;
                            case "LOAD":
                                c = b.media.contentId;
                                a = b.currentTime;
                                var f = this.o(c);
                                this.a.autoplay = !0;
                                this.b.load(f, a).then(function () {
                                    Gc(this, 0, {
                                        contentId: f,
                                        streamType: this.b.$() ? "LIVE" : "BUFFERED",
                                        contentType: ""
                                    })
                                }.bind(this))["catch"](function (a) {
                                    var c = "LOAD_FAILED";
                                    7 == a.category && 7E3 == a.code && (c = "LOAD_CANCELLED");
                                    Ic(this, {
                                        requestId: Number(b.requestId),
                                        type: c
                                    }, this.g)
                                }.bind(this));
                                break;
                            default:
                                Ic(this, {
                                    requestId: Number(b.requestId),
                                    type: "INVALID_REQUEST",
                                    reason: "INVALID_COMMAND"
                                }, this.g)
                        }
                    };
                    k.vc = function (a, b, c) {
                        Ic(this, {
                            type: "asyncComplete",
                            id: b,
                            error: c
                        }, this.c, a)
                    };

                    function Ic(a, b, c, d) {
                        a.i && (a = xc(b), d ? c.getCastChannel(d).send(a) : c.broadcast(a))
                    }

                    function Gc(a, b, c) {
                        var d = Jc,
                            d = {
                                mediaSessionId: 0,
                                playbackRate: a.a.playbackRate,
                                playerState: a.f ? d.IDLE : a.b.la ? d.Ac : a.a.paused ? d.Bc : d.Cc,
                                currentTime: a.a.currentTime,
                                supportedMediaCommands: 15,
                                volume: {
                                    level: a.a.volume,
                                    muted: a.a.muted
                                }
                            };
                        c && (d.media = c);
                        Ic(a, {
                            requestId: b,
                            type: "MEDIA_STATUS",
                            status: [d]
                        }, a.g)
                    }
                    var Jc = {
                        IDLE: "IDLE",
                        Cc: "PLAYING",
                        Ac: "BUFFERING",
                        Bc: "PAUSED"
                    };

                    function Kc(a, b) {
                        var c = J(a, b);
                        return 1 != c.length ? null : c[0]
                    }

                    function J(a, b) {
                        return Array.prototype.filter.call(a.childNodes, function (a) {
                            return a.tagName == b
                        })
                    }

                    function Lc(a) {
                        var b = a.firstChild;
                        return b && b.nodeType == Node.TEXT_NODE ? a.textContent.trim() : null
                    }

                    function L(a, b, c, d) {
                        var e = null;
                        a = a.getAttribute(b);
                        null != a && (e = c(a));
                        return null == e ? void 0 != d ? d : null : e
                    }

                    function Mc(a) {
                        if (!a) return null;
                        /^\d+\-\d+\-\d+T\d+:\d+:\d+(\.\d+)?$/.test(a) && (a += "Z");
                        a = Date.parse(a);
                        return isNaN(a) ? null : Math.floor(a / 1E3)
                    }

                    function Nc(a) {
                        if (!a) return null;
                        a = /^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(a);
                        if (!a) return null;
                        a = 31536E3 * Number(a[1] || null) + 2592E3 * Number(a[2] || null) + 86400 * Number(a[3] || null) + 3600 * Number(a[4] || null) + 60 * Number(a[5] || null) + Number(a[6] || null);
                        return isFinite(a) ? a : null
                    }

                    function Oc(a) {
                        var b = /([0-9]+)-([0-9]+)/.exec(a);
                        if (!b) return null;
                        a = Number(b[1]);
                        if (!isFinite(a)) return null;
                        b = Number(b[2]);
                        return isFinite(b) ? {
                            start: a,
                            end: b
                        } : null
                    }

                    function Pc(a) {
                        a = Number(a);
                        return a % 1 ? null : a
                    }

                    function Qc(a) {
                        a = Number(a);
                        return !(a % 1) && 0 < a ? a : null
                    }

                    function Rc(a) {
                        a = Number(a);
                        return !(a % 1) && 0 <= a ? a : null
                    }

                    function Sc(a) {
                        var b;
                        a = (b = a.match(/^(\d+)\/(\d+)$/)) ? Number(b[1] / b[2]) : Number(a);
                        return isNaN(a) ? null : a
                    };
                    var Tc = {
                        "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
                        "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
                        "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
                        "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
                    };

                    function Uc(a, b, c) {
                        a = Vc(a);
                        var d = null,
                            e = null,
                            f = [],
                            g = [],
                            h = a.map(function (a) {
                                return a.keyId
                            }).filter(xa);
                        if (0 < h.length && (e = h[0], h.some(ya(e)))) throw new t(2, 4, 4010);
                        c || (g = a.filter(function (a) {
                            return "urn:mpeg:dash:mp4protection:2011" == a.sc ? (d = a.init || d, !1) : !0
                        }), 0 < g.length && (f = Wc(d, b, g), f.length || (f = [Aa("", d)])));
                        0 < a.length && (c || !g.length) && (f = Oa(Tc).map(function (a) {
                            return Aa(a, d)
                        }));
                        e && f.forEach(function (a) {
                            a.initData.forEach(function (a) {
                                a.keyId = e
                            })
                        });
                        return {
                            Sb: e,
                            Ae: d,
                            drmInfos: f,
                            Ub: !0
                        }
                    }

                    function Xc(a, b, c, d) {
                        var e = Uc(a, b, d);
                        if (c.Ub) {
                            a = 1 == c.drmInfos.length && !c.drmInfos[0].keySystem;
                            b = !e.drmInfos.length;
                            if (!c.drmInfos.length || a && !b) c.drmInfos = e.drmInfos;
                            c.Ub = !1
                        } else if (0 < e.drmInfos.length && (c.drmInfos = c.drmInfos.filter(function (a) {
                                return e.drmInfos.some(function (b) {
                                    return b.keySystem == a.keySystem
                                })
                            }), !c.drmInfos.length)) throw new t(2, 4, 4008);
                        return e.Sb || c.Sb
                    }

                    function Wc(a, b, c) {
                        return c.map(function (c) {
                            var d = Tc[c.sc];
                            return d ? [Aa(d, c.init || a)] : b(c.node) || []
                        }).reduce(w, [])
                    }

                    function Vc(a) {
                        return a.map(function (a) {
                            var b = a.getAttribute("schemeIdUri"),
                                d = a.getAttribute("cenc:default_KID"),
                                e = J(a, "cenc:pssh").map(Lc);
                            if (!b) return null;
                            b = b.toLowerCase();
                            if (d && (d = d.replace(/-/g, "").toLowerCase(), 0 <= d.indexOf(" "))) throw new t(2, 4, 4009);
                            var f = [];
                            try {
                                f = e.map(function (a) {
                                    return {
                                        initDataType: "cenc",
                                        initData: Za(a),
                                        keyId: null
                                    }
                                })
                            } catch (g) {
                                throw new t(2, 4, 4007);
                            }
                            return {
                                node: a,
                                sc: b,
                                keyId: d,
                                init: 0 < f.length ? f : null
                            }
                        }).filter(xa)
                    };

                    function Yc(a, b, c, d, e) {
                        null != e && (e = Math.round(e));
                        var f = {
                            RepresentationID: b,
                            Number: c,
                            Bandwidth: d,
                            Time: e
                        };
                        return a.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)d)?\$/g, function (a, b, c) {
                            if ("$$" == a) return "$";
                            var d = f[b];
                            if (null == d) return a;
                            "RepresentationID" == b && c && (c = void 0);
                            a = d.toString();
                            c = window.parseInt(c, 10) || 1;
                            return Array(Math.max(0, c - a.length) + 1).join("0") + a
                        })
                    }

                    function Zc(a, b) {
                        var c = $c(a, b, "timescale"),
                            d = 1;
                        c && (d = Qc(c) || 1);
                        c = $c(a, b, "duration");
                        (c = Qc(c || "")) && (c /= d);
                        var e = $c(a, b, "startNumber"),
                            f = $c(a, b, "presentationTimeOffset"),
                            g = Rc(e || "");
                        if (null == e || null == g) g = 1;
                        var h = ad(a, b, "SegmentTimeline"),
                            e = null;
                        if (h) {
                            for (var e = d, l = Number(f), m = a.R.duration || Infinity, h = J(h, "S"), q = [], r = 0, v = 0; v < h.length; ++v) {
                                var u = h[v],
                                    x = L(u, "t", Rc),
                                    K = L(u, "d", Rc),
                                    u = L(u, "r", Pc);
                                null != x && (x -= l);
                                if (!K) break;
                                x = null != x ? x : r;
                                u = u || 0;
                                if (0 > u)
                                    if (v + 1 < h.length) {
                                        u = L(h[v + 1], "t", Rc);
                                        if (null == u) break;
                                        else if (x >= u) break;
                                        u = Math.ceil((u - x) / K) - 1
                                    } else {
                                        if (Infinity == m) break;
                                        else if (x / e >= m) break;
                                        u = Math.ceil((m * e - x) / K) - 1
                                    }
                                0 < q.length && x != r && (q[q.length - 1].end = x / e);
                                for (var W = 0; W <= u; ++W) r = x + K, q.push({
                                    start: x / e,
                                    end: r / e,
                                    re: x
                                }), x = r
                            }
                            e = q
                        }
                        return {
                            timescale: d,
                            P: c,
                            Aa: g,
                            presentationTimeOffset: Number(f) / d || 0,
                            Pb: Number(f),
                            F: e
                        }
                    }

                    function $c(a, b, c) {
                        return [b(a.w), b(a.S), b(a.T)].filter(xa).map(function (a) {
                            return a.getAttribute(c)
                        }).reduce(function (a, b) {
                            return a || b
                        })
                    }

                    function ad(a, b, c) {
                        return [b(a.w), b(a.S), b(a.T)].filter(xa).map(function (a) {
                            return Kc(a, c)
                        }).reduce(function (a, b) {
                            return a || b
                        })
                    };

                    function bd(a, b, c) {
                        this.a = a;
                        this.X = b;
                        this.M = c
                    }
                    n("shaka.media.InitSegmentReference", bd);

                    function M(a, b, c, d, e, f) {
                        this.position = a;
                        this.startTime = b;
                        this.endTime = c;
                        this.a = d;
                        this.X = e;
                        this.M = f
                    }
                    n("shaka.media.SegmentReference", M);

                    function N(a, b) {
                        this.H = a;
                        this.a = b == cd;
                        this.u = 0
                    }
                    n("shaka.util.DataViewReader", N);
                    var cd = 1;
                    N.Endianness = {
                        we: 0,
                        ye: cd
                    };
                    N.prototype.Z = function () {
                        return this.u < this.H.byteLength
                    };
                    N.prototype.hasMoreData = N.prototype.Z;
                    N.prototype.Vc = function () {
                        return this.u
                    };
                    N.prototype.getPosition = N.prototype.Vc;
                    N.prototype.Qc = function () {
                        return this.H.byteLength
                    };
                    N.prototype.getLength = N.prototype.Qc;
                    N.prototype.Eb = function () {
                        try {
                            var a = this.H.getUint8(this.u)
                        } catch (b) {
                            dd()
                        }
                        this.u += 1;
                        return a
                    };
                    N.prototype.readUint8 = N.prototype.Eb;
                    N.prototype.oc = function () {
                        try {
                            var a = this.H.getUint16(this.u, this.a)
                        } catch (b) {
                            dd()
                        }
                        this.u += 2;
                        return a
                    };
                    N.prototype.readUint16 = N.prototype.oc;
                    N.prototype.D = function () {
                        try {
                            var a = this.H.getUint32(this.u, this.a)
                        } catch (b) {
                            dd()
                        }
                        this.u += 4;
                        return a
                    };
                    N.prototype.readUint32 = N.prototype.D;
                    N.prototype.nc = function () {
                        try {
                            var a = this.H.getInt32(this.u, this.a)
                        } catch (b) {
                            dd()
                        }
                        this.u += 4;
                        return a
                    };
                    N.prototype.readInt32 = N.prototype.nc;
                    N.prototype.Qa = function () {
                        try {
                            if (this.a) {
                                var a = this.H.getUint32(this.u, !0);
                                var b = this.H.getUint32(this.u + 4, !0)
                            } else b = this.H.getUint32(this.u, !1), a = this.H.getUint32(this.u + 4, !1)
                        } catch (c) {
                            dd()
                        }
                        if (2097151 < b) throw new t(2, 3, 3001);
                        this.u += 8;
                        return b * Math.pow(2, 32) + a
                    };
                    N.prototype.readUint64 = N.prototype.Qa;
                    N.prototype.La = function (a) {
                        this.u + a > this.H.byteLength && dd();
                        var b = this.H.buffer.slice(this.u, this.u + a);
                        this.u += a;
                        return new Uint8Array(b)
                    };
                    N.prototype.readBytes = N.prototype.La;
                    N.prototype.I = function (a) {
                        this.u + a > this.H.byteLength && dd();
                        this.u += a
                    };
                    N.prototype.skip = N.prototype.I;
                    N.prototype.Db = function () {
                        for (var a = this.u; this.Z() && this.H.getUint8(this.u);) this.u += 1;
                        a = this.H.buffer.slice(a, this.u);
                        this.u += 1;
                        return E(a)
                    };
                    N.prototype.readTerminatedString = N.prototype.Db;

                    function dd() {
                        throw new t(2, 3, 3E3);
                    };

                    function O() {
                        this.b = [];
                        this.a = []
                    }
                    n("shaka.util.Mp4Parser", O);
                    O.prototype.C = function (a, b) {
                        var c = ed(a);
                        this.b[c] = 0;
                        this.a[c] = b;
                        return this
                    };
                    O.prototype.box = O.prototype.C;
                    O.prototype.da = function (a, b) {
                        var c = ed(a);
                        this.b[c] = 1;
                        this.a[c] = b;
                        return this
                    };
                    O.prototype.fullBox = O.prototype.da;
                    O.prototype.parse = function (a) {
                        for (a = new N(new DataView(a), 0); a.Z();) this.fb(0, a)
                    };
                    O.prototype.parse = O.prototype.parse;
                    O.prototype.fb = function (a, b) {
                        var c = b.u,
                            d = b.D(),
                            e = b.D();
                        switch (d) {
                            case 0:
                                d = b.H.byteLength - c;
                                break;
                            case 1:
                                d = b.Qa()
                        }
                        var f = this.a[e];
                        if (f) {
                            var g = null,
                                h = null;
                            1 == this.b[e] && (h = b.D(), g = h >>> 24, h &= 16777215);
                            e = c + d - b.u;
                            e = 0 < e ? b.La(e).buffer : new ArrayBuffer(0);
                            e = new N(new DataView(e), 0);
                            f({
                                Oa: this,
                                version: g,
                                Nc: h,
                                s: e,
                                size: d,
                                start: c + a
                            })
                        } else b.I(c + d - b.u)
                    };
                    O.prototype.parseNext = O.prototype.fb;

                    function P(a) {
                        for (; a.s.Z();) a.Oa.fb(a.start, a.s)
                    }
                    O.children = P;

                    function fd(a) {
                        for (var b = a.s.D(); 0 < b; --b) a.Oa.fb(a.start, a.s)
                    }
                    O.sampleDescription = fd;

                    function gd(a) {
                        return function (b) {
                            a(b.s.La(b.s.H.byteLength - b.s.u))
                        }
                    }
                    O.allData = gd;

                    function ed(a) {
                        for (var b = 0, c = 0; c < a.length; c++) b = b << 8 | a.charCodeAt(c);
                        return b
                    };

                    function hd(a, b, c, d) {
                        var e, f = (new O).da("sidx", function (a) {
                            e = id(b, d, c, a)
                        });
                        a && f.parse(a);
                        if (e) return e;
                        throw new t(2, 3, 3004);
                    }

                    function id(a, b, c, d) {
                        var e = [];
                        d.s.I(4);
                        var f = d.s.D();
                        if (!f) throw new t(2, 3, 3005);
                        if (d.version) {
                            var g = d.s.Qa();
                            var h = d.s.Qa()
                        } else g = d.s.D(), h = d.s.D();
                        d.s.I(2);
                        var l = d.s.oc();
                        b = g - b;
                        a = a + d.size + h;
                        for (h = 0; h < l; h++) {
                            var m = d.s.D();
                            g = (m & 2147483648) >>> 31;
                            var m = m & 2147483647,
                                q = d.s.D();
                            d.s.I(4);
                            if (1 == g) throw new t(2, 3, 3006);
                            e.push(new M(e.length, b / f, (b + q) / f, function () {
                                return c
                            }, a, a + m - 1));
                            b += q;
                            a += m
                        }
                        return e
                    };

                    function Q(a) {
                        this.a = a
                    }
                    n("shaka.media.SegmentIndex", Q);
                    Q.prototype.m = function () {
                        this.a = null;
                        return Promise.resolve()
                    };
                    Q.prototype.destroy = Q.prototype.m;
                    Q.prototype.find = function (a) {
                        for (var b = this.a.length - 1; 0 <= b; --b) {
                            var c = this.a[b];
                            if (a >= c.startTime && a < c.endTime) return c.position
                        }
                        return this.a.length && a < this.a[0].startTime ? this.a[0].position : null
                    };
                    Q.prototype.find = Q.prototype.find;
                    Q.prototype.get = function (a) {
                        if (!this.a.length) return null;
                        a -= this.a[0].position;
                        return 0 > a || a >= this.a.length ? null : this.a[a]
                    };
                    Q.prototype.get = Q.prototype.get;
                    Q.prototype.xb = function (a) {
                        for (var b, c, d = [], e = c = 0; c < this.a.length && e < a.length;) {
                            var f = this.a[c];
                            b = a[e];
                            f.startTime < b.startTime ? (d.push(f), c++) : (f.startTime > b.startTime || (.1 < Math.abs(f.endTime - b.endTime) ? d.push(b) : d.push(f), c++), e++)
                        }
                        for (; c < this.a.length;) d.push(this.a[c++]);
                        if (d.length)
                            for (c = d[d.length - 1].position + 1; e < a.length;) b = a[e++], b = new M(c++, b.startTime, b.endTime, b.a, b.X, b.M), d.push(b);
                        else d = a;
                        this.a = d
                    };
                    Q.prototype.merge = Q.prototype.xb;
                    Q.prototype.qb = function (a) {
                        for (var b = 0; b < this.a.length && !(this.a[b].endTime > a); ++b);
                        this.a.splice(0, b)
                    };
                    Q.prototype.evict = Q.prototype.qb;

                    function jd(a, b) {
                        if (a.a.length) {
                            var c = a.a[a.a.length - 1];
                            c.startTime > b || (a.a[a.a.length - 1] = new M(c.position, c.startTime, b, c.a, c.X, c.M))
                        }
                    };

                    function kd(a) {
                        this.b = a;
                        this.a = new N(a, 0);
                        ld || (ld = [new Uint8Array([255]), new Uint8Array([127, 255]), new Uint8Array([63, 255, 255]), new Uint8Array([31, 255, 255, 255]), new Uint8Array([15, 255, 255, 255, 255]), new Uint8Array([7, 255, 255, 255, 255, 255]), new Uint8Array([3, 255, 255, 255, 255, 255, 255]), new Uint8Array([1, 255, 255, 255, 255, 255, 255, 255])])
                    }
                    var ld;
                    kd.prototype.Z = function () {
                        return this.a.Z()
                    };

                    function md(a) {
                        var b = nd(a);
                        if (7 < b.length) throw new t(2, 3, 3002);
                        for (var c = 0, d = 0; d < b.length; d++) c = 256 * c + b[d];
                        b = c;
                        c = nd(a);
                        a: {
                            for (d = 0; d < ld.length; d++)
                                if (bb(c, ld[d])) {
                                    d = !0;
                                    break a
                                }
                            d = !1
                        }
                        if (d) c = a.b.byteLength - a.a.u;
                        else {
                            if (8 == c.length && c[1] & 224) throw new t(2, 3, 3001);
                            for (var d = c[0] & (1 << 8 - c.length) - 1, e = 1; e < c.length; e++) d = 256 * d + c[e];
                            c = d
                        }
                        c = a.a.u + c <= a.b.byteLength ? c : a.b.byteLength - a.a.u;
                        d = new DataView(a.b.buffer, a.b.byteOffset + a.a.u, c);
                        a.a.I(c);
                        return new od(b, d)
                    }

                    function nd(a) {
                        var b = a.a.Eb(),
                            c;
                        for (c = 1; 8 >= c && !(b & 1 << 8 - c); c++);
                        if (8 < c) throw new t(2, 3, 3002);
                        var d = new Uint8Array(c);
                        d[0] = b;
                        for (b = 1; b < c; b++) d[b] = a.a.Eb();
                        return d
                    }

                    function od(a, b) {
                        this.id = a;
                        this.a = b
                    }

                    function pd(a) {
                        if (8 < a.a.byteLength) throw new t(2, 3, 3002);
                        if (8 == a.a.byteLength && a.a.getUint8(0) & 224) throw new t(2, 3, 3001);
                        for (var b = 0, c = 0; c < a.a.byteLength; c++) var d = a.a.getUint8(c),
                            b = 256 * b + d;
                        return b
                    };

                    function qd() {}
                    qd.prototype.parse = function (a, b, c, d) {
                        var e;
                        b = new kd(new DataView(b));
                        if (440786851 != md(b).id) throw new t(2, 3, 3008);
                        var f = md(b);
                        if (408125543 != f.id) throw new t(2, 3, 3009);
                        b = f.a.byteOffset;
                        f = new kd(f.a);
                        for (e = null; f.Z();) {
                            var g = md(f);
                            if (357149030 == g.id) {
                                e = g;
                                break
                            }
                        }
                        if (!e) throw new t(2, 3, 3010);
                        f = new kd(e.a);
                        e = 1E6;
                        for (g = null; f.Z();) {
                            var h = md(f);
                            if (2807729 == h.id) e = pd(h);
                            else if (17545 == h.id)
                                if (g = h, 4 == g.a.byteLength) g = g.a.getFloat32(0);
                                else if (8 == g.a.byteLength) g = g.a.getFloat64(0);
                            else throw new t(2, 3, 3003);
                        }
                        if (null == g) throw new t(2, 3, 3011);
                        f = e / 1E9;
                        e = g * f;
                        a = md(new kd(new DataView(a)));
                        if (475249515 != a.id) throw new t(2, 3, 3007);
                        return rd(a, b, f, e, c, d)
                    };

                    function rd(a, b, c, d, e, f) {
                        function g() {
                            return e
                        }
                        var h = [];
                        a = new kd(a.a);
                        for (var l = -1, m = -1; a.Z();) {
                            var q = md(a);
                            if (187 == q.id) {
                                var r = sd(q);
                                r && (q = c * (r.se - f), r = b + r.Nd, 0 <= l && h.push(new M(h.length, l, q, g, m, r - 1)), l = q, m = r)
                            }
                        }
                        0 <= l && h.push(new M(h.length, l, d, g, m, null));
                        return h
                    }

                    function sd(a) {
                        var b = new kd(a.a);
                        a = md(b);
                        if (179 != a.id) throw new t(2, 3, 3013);
                        a = pd(a);
                        b = md(b);
                        if (183 != b.id) throw new t(2, 3, 3012);
                        for (var b = new kd(b.a), c = 0; b.Z();) {
                            var d = md(b);
                            if (241 == d.id) {
                                c = pd(d);
                                break
                            }
                        }
                        return {
                            se: a,
                            Nd: c
                        }
                    };

                    function td(a, b) {
                        var c = ad(a, b, "Initialization");
                        if (!c) return null;
                        var d = a.w.U,
                            e = c.getAttribute("sourceURL");
                        e && (d = z(a.w.U, [e]));
                        var e = 0,
                            f = null;
                        if (c = L(c, "range", Oc)) e = c.start, f = c.end;
                        return new bd(function () {
                            return d
                        }, e, f)
                    }

                    function ud(a, b) {
                        var c = $c(a, vd, "presentationTimeOffset"),
                            d = td(a, vd);
                        var e = Number(c);
                        var f = a.w.contentType,
                            g = a.w.mimeType.split("/")[1];
                        if ("text" != f && "mp4" != g && "webm" != g) throw new t(2, 4, 4006);
                        if ("webm" == g && !d) throw new t(2, 4, 4005);
                        var f = ad(a, vd, "RepresentationIndex"),
                            h = $c(a, vd, "indexRange"),
                            l = a.w.U,
                            h = Oc(h || "");
                        if (f) {
                            var m = f.getAttribute("sourceURL");
                            m && (l = z(a.w.U, [m]));
                            h = L(f, "range", Oc, h)
                        }
                        if (!h) throw new t(2, 4, 4002);
                        e = wd(a, b, d, l, h.start, h.end, g, e);
                        return {
                            createSegmentIndex: e.createSegmentIndex,
                            findSegmentPosition: e.findSegmentPosition,
                            getSegmentReference: e.getSegmentReference,
                            initSegmentReference: d,
                            presentationTimeOffset: Number(c) || 0
                        }
                    }

                    function wd(a, b, c, d, e, f, g, h) {
                        var l = a.presentationTimeline,
                            m = !a.Ea || !a.R.ub,
                            q = a.R.duration,
                            r = b,
                            v = null;
                        return {
                            createSegmentIndex: function () {
                                var a = [r(d, e, f), "webm" == g ? r(c.a(), c.X, c.M) : null];
                                r = null;
                                return Promise.all(a).then(function (a) {
                                    var b = a[0];
                                    a = a[1] || null;
                                    b = "mp4" == g ? hd(b, e, d, h) : (new qd).parse(b, a, d, h);
                                    l.Ia(0, b);
                                    v = new Q(b);
                                    m && jd(v, q)
                                })
                            },
                            findSegmentPosition: function (a) {
                                return v.find(a)
                            },
                            getSegmentReference: function (a) {
                                return v.get(a)
                            }
                        }
                    }

                    function vd(a) {
                        return a.Ra
                    };

                    function xd(a, b) {
                        var c = td(a, yd);
                        var d = zd(a);
                        var e = Zc(a, yd),
                            f = e.Aa;
                        f || (f = 1);
                        var g = 0;
                        e.P ? g = e.P * (f - 1) : e.F && 0 < e.F.length && (g = e.F[0].start);
                        d = {
                            P: e.P,
                            startTime: g,
                            Aa: f,
                            presentationTimeOffset: e.presentationTimeOffset,
                            F: e.F,
                            Ha: d
                        };
                        if (!d.P && !d.F && 1 < d.Ha.length) throw new t(2, 4, 4002);
                        if (!d.P && !a.R.duration && !d.F && 1 == d.Ha.length) throw new t(2, 4, 4002);
                        if (d.F && !d.F.length) throw new t(2, 4, 4002);
                        f = e = null;
                        a.T.id && a.w.id && (f = a.T.id + "," + a.w.id, e = b[f]);
                        g = Ad(a.R.duration, d.Aa, a.w.U, d);
                        e ? (e.xb(g), e.qb(a.presentationTimeline.na() -
                            a.R.start)) : (a.presentationTimeline.Ia(0, g), e = new Q(g), f && a.Ea && (b[f] = e));
                        a.Ea && a.R.ub || jd(e, a.R.duration);
                        return {
                            createSegmentIndex: Promise.resolve.bind(Promise),
                            findSegmentPosition: e.find.bind(e),
                            getSegmentReference: e.get.bind(e),
                            initSegmentReference: c,
                            presentationTimeOffset: d.presentationTimeOffset
                        }
                    }

                    function yd(a) {
                        return a.pa
                    }

                    function Ad(a, b, c, d) {
                        var e = d.Ha.length;
                        d.F && d.F.length != d.Ha.length && (e = Math.min(d.F.length, d.Ha.length));
                        for (var f = [], g = d.startTime, h = 0; h < e; h++) {
                            var l = d.Ha[h],
                                m = z(c, [l.cd]);
                            var q = null != d.P ? g + d.P : d.F ? d.F[h].end : g + a;
                            f.push(new M(h + b, g, q, function (a) {
                                return a
                            }.bind(null, m), l.start, l.end));
                            g = q
                        }
                        return f
                    }

                    function zd(a) {
                        return [a.w.pa, a.S.pa, a.T.pa].filter(xa).map(function (a) {
                            return J(a, "SegmentURL")
                        }).reduce(function (a, c) {
                            return 0 < a.length ? a : c
                        }).map(function (b) {
                            b.getAttribute("indexRange") && !a.$b && (a.$b = !0);
                            var c = b.getAttribute("media");
                            b = L(b, "mediaRange", Oc, {
                                start: 0,
                                end: null
                            });
                            return {
                                cd: c,
                                start: b.start,
                                end: b.end
                            }
                        })
                    };

                    function Bd(a, b, c, d) {
                        var e = Cd(a);
                        var f = Zc(a, Dd);
                        var g = $c(a, Dd, "media"),
                            h = $c(a, Dd, "index");
                        f = {
                            P: f.P,
                            timescale: f.timescale,
                            Aa: f.Aa,
                            presentationTimeOffset: f.presentationTimeOffset,
                            Pb: f.Pb,
                            F: f.F,
                            wb: g,
                            Na: h
                        };
                        g = 0 + (f.Na ? 1 : 0);
                        g += f.F ? 1 : 0;
                        g += f.P ? 1 : 0;
                        if (!g) throw new t(2, 4, 4002);
                        1 != g && (f.Na && (f.F = null), f.P = null);
                        if (!f.Na && !f.wb) throw new t(2, 4, 4002);
                        if (f.Na) {
                            c = a.w.mimeType.split("/")[1];
                            if ("mp4" != c && "webm" != c) throw new t(2, 4, 4006);
                            if ("webm" == c && !e) throw new t(2, 4, 4005);
                            d = Yc(f.Na, a.w.id, null, a.bandwidth || null,
                                null);
                            d = z(a.w.U, [d]);
                            a = wd(a, b, e, d, 0, null, c, f.presentationTimeOffset)
                        } else f.P ? (d || a.presentationTimeline.yb(f.P), a = Ed(a, f)) : (d = b = null, a.T.id && a.w.id && (d = a.T.id + "," + a.w.id, b = c[d]), g = Fd(a, f), b ? (b.xb(g), b.qb(a.presentationTimeline.na() - a.R.start)) : (a.presentationTimeline.Ia(0, g), b = new Q(g), d && a.Ea && (c[d] = b)), a.Ea && a.R.ub || jd(b, a.R.duration), a = {
                            createSegmentIndex: Promise.resolve.bind(Promise),
                            findSegmentPosition: b.find.bind(b),
                            getSegmentReference: b.get.bind(b)
                        });
                        return {
                            createSegmentIndex: a.createSegmentIndex,
                            findSegmentPosition: a.findSegmentPosition,
                            getSegmentReference: a.getSegmentReference,
                            initSegmentReference: e,
                            presentationTimeOffset: f.presentationTimeOffset
                        }
                    }

                    function Dd(a) {
                        return a.Sa
                    }

                    function Ed(a, b) {
                        var c = a.R.duration,
                            d = b.P,
                            e = b.Aa,
                            f = b.timescale,
                            g = b.wb,
                            h = a.bandwidth || null,
                            l = a.w.id,
                            m = a.w.U;
                        return {
                            createSegmentIndex: Promise.resolve.bind(Promise),
                            findSegmentPosition: function (a) {
                                return 0 > a || c && a >= c ? null : Math.floor(a / d)
                            },
                            getSegmentReference: function (a) {
                                var b = a * d;
                                return 0 > b || c && b >= c ? null : new M(a, b, b + d, function () {
                                    var c = Yc(g, l, a + e, h, b * f);
                                    return z(m, [c])
                                }, 0, null)
                            }
                        }
                    }

                    function Fd(a, b) {
                        for (var c = [], d = 0; d < b.F.length; d++) {
                            var e = d + b.Aa;
                            c.push(new M(e, b.F[d].start, b.F[d].end, function (a, b, c, d, e, q) {
                                a = Yc(a, b, e, c, q);
                                return z(d, [a]).map(function (a) {
                                    return a.toString()
                                })
                            }.bind(null, b.wb, a.w.id, a.bandwidth || null, a.w.U, e, b.F[d].re + b.Pb), 0, null))
                        }
                        return c
                    }

                    function Cd(a) {
                        var b = $c(a, Dd, "initialization");
                        if (!b) return null;
                        var c = a.w.id,
                            d = a.bandwidth || null,
                            e = a.w.U;
                        return new bd(function () {
                            var a = Yc(b, c, null, d, null);
                            return z(e, [a])
                        }, 0, null)
                    };
                    var Gd = {},
                        Hd = {};
                    n("shaka.media.ManifestParser.registerParserByExtension", function (a, b) {
                        Hd[a] = b
                    });
                    n("shaka.media.ManifestParser.registerParserByMime", function (a, b) {
                        Gd[a] = b
                    });

                    function Id() {
                        var a = {},
                            b;
                        for (b in Gd) a[b] = !0;
                        for (b in Hd) a[b] = !0;
                        ["application/dash+xml", "application/x-mpegurl", "application/vnd.apple.mpegurl", "application/vnd.ms-sstr+xml"].forEach(function (b) {
                            a[b] = !!Gd[b]
                        });
                        ["mpd", "m3u8", "ism"].forEach(function (b) {
                            a[b] = !!Hd[b]
                        });
                        return a
                    }

                    function Jd(a, b, c, d) {
                        var e = d;
                        e || (d = (new ia(a)).W.split("/").pop().split("."), 1 < d.length && (d = d.pop().toLowerCase(), e = Hd[d]));
                        if (e) return Promise.resolve(e);
                        c = Ga([a], c);
                        c.method = "HEAD";
                        return b.request(0, c).then(function (b) {
                            (b = b.headers["content-type"]) && (b = b.toLowerCase());
                            return (e = Gd[b]) ? e : Promise.reject(new t(2, 4, 4E3, a))
                        }, function (a) {
                            a.severity = 2;
                            return Promise.reject(a)
                        })
                    };

                    function R(a, b) {
                        this.f = a;
                        this.i = b;
                        this.c = this.a = Infinity;
                        this.b = 1;
                        this.h = 0;
                        this.g = !0
                    }
                    n("shaka.media.PresentationTimeline", R);
                    R.prototype.Y = function () {
                        return this.a
                    };
                    R.prototype.getDuration = R.prototype.Y;
                    R.prototype.qa = function (a) {
                        this.a = a
                    };
                    R.prototype.setDuration = R.prototype.qa;
                    R.prototype.Wc = function () {
                        return this.f
                    };
                    R.prototype.getPresentationStartTime = R.prototype.Wc;
                    R.prototype.wc = function (a) {
                        this.h = a
                    };
                    R.prototype.setClockOffset = R.prototype.wc;
                    R.prototype.yc = function (a) {
                        this.g = a
                    };
                    R.prototype.setStatic = R.prototype.yc;
                    R.prototype.Xc = function () {
                        return this.c
                    };
                    R.prototype.getSegmentAvailabilityDuration = R.prototype.Xc;
                    R.prototype.xc = function (a) {
                        this.c = a
                    };
                    R.prototype.setSegmentAvailabilityDuration = R.prototype.xc;
                    R.prototype.Ia = function (a, b) {
                        b.length && (this.b = b.reduce(function (a, b) {
                            return Math.max(a, b.endTime - b.startTime)
                        }, this.b))
                    };
                    R.prototype.notifySegments = R.prototype.Ia;
                    R.prototype.yb = function (a) {
                        this.b = Math.max(this.b, a)
                    };
                    R.prototype.notifyMaxSegmentDuration = R.prototype.yb;
                    R.prototype.$ = function () {
                        return Infinity == this.a && !this.g
                    };
                    R.prototype.isLive = R.prototype.$;
                    R.prototype.wa = function () {
                        return Infinity != this.a && !this.g
                    };
                    R.prototype.isInProgress = R.prototype.wa;
                    R.prototype.na = function () {
                        return this.Fa(0)
                    };
                    R.prototype.getSegmentAvailabilityStart = R.prototype.na;
                    R.prototype.Fa = function (a) {
                        if (Infinity == this.c) return 0;
                        var b = this.va();
                        return Math.max(0, Math.min(b - this.c + a, b))
                    };
                    R.prototype.getSafeAvailabilityStart = R.prototype.Fa;
                    R.prototype.va = function () {
                        return this.$() || this.wa() ? Math.min(Math.max(0, (Date.now() + this.h) / 1E3 - this.b - this.f), this.a) : this.a
                    };
                    R.prototype.getSegmentAvailabilityEnd = R.prototype.va;
                    R.prototype.cb = function () {
                        return Math.max(0, this.va() - (this.$() || this.wa() ? this.i : 0))
                    };
                    R.prototype.getSeekRangeEnd = R.prototype.cb;

                    function Kd() {
                        this.a = this.b = null;
                        this.g = [];
                        this.c = null;
                        this.i = [];
                        this.h = 1;
                        this.j = {};
                        this.l = 0;
                        this.f = null
                    }
                    n("shaka.dash.DashParser", Kd);
                    k = Kd.prototype;
                    k.configure = function (a) {
                        this.b = a
                    };
                    k.start = function (a, b) {
                        this.g = [a];
                        this.a = b;
                        return Ld(this).then(function () {
                            this.a && Md(this, 0);
                            return this.c
                        }.bind(this))
                    };
                    k.stop = function () {
                        this.b = this.a = null;
                        this.g = [];
                        this.c = null;
                        this.i = [];
                        this.j = {};
                        null != this.f && (window.clearTimeout(this.f), this.f = null);
                        return Promise.resolve()
                    };
                    k.update = function () {
                        Ld(this)["catch"](function (a) {
                            if (this.a) this.a.onError(a)
                        }.bind(this))
                    };
                    k.onExpirationUpdated = function () {};

                    function Ld(a) {
                        return a.a.networkingEngine.request(0, Ga(a.g, a.b.retryParameters)).then(function (a) {
                            if (this.a) return Nd(this, a.data, a.uri)
                        }.bind(a))
                    }

                    function Nd(a, b, c) {
                        var d = E(b),
                            e = new DOMParser,
                            f = null;
                        b = null;
                        try {
                            f = e.parseFromString(d, "text/xml")
                        } catch (v) {}
                        f && "MPD" == f.documentElement.tagName && (b = f.documentElement);
                        b && 0 < b.getElementsByTagName("parsererror").length && (b = null);
                        if (!b) throw new t(2, 4, 4001);
                        c = [c];
                        d = J(b, "Location").map(Lc).filter(xa);
                        0 < d.length && (c = a.g = d);
                        d = J(b, "BaseURL").map(Lc);
                        c = z(c, d);
                        var g = L(b, "minBufferTime", Nc);
                        a.l = L(b, "minimumUpdatePeriod", Nc, -1);
                        var h = L(b, "availabilityStartTime", Mc),
                            d = L(b, "timeShiftBufferDepth", Nc),
                            l = L(b, "suggestedPresentationDelay",
                                Nc),
                            e = L(b, "maxSegmentDuration", Nc),
                            f = b.getAttribute("type") || "static";
                        if (a.c) var m = a.c.presentationTimeline;
                        else {
                            var q = Math.max(10, 1.5 * g);
                            m = new R(h, null != l ? l : q)
                        }
                        var h = Od(a, {
                                Ea: "static" != f,
                                presentationTimeline: m,
                                T: null,
                                R: null,
                                S: null,
                                w: null,
                                bandwidth: void 0,
                                $b: !1
                            }, c, b),
                            l = h.duration,
                            r = h.periods;
                        m.yc("static" == f);
                        m.qa(l || Infinity);
                        m.xc(null != d ? d : Infinity);
                        m.yb(e || 1);
                        if (a.c) return Promise.resolve();
                        b = J(b, "UTCTiming");
                        return Pd(a, c, b, m.$()).then(function (a) {
                            this.a && (m.wc(a), this.c = {
                                presentationTimeline: m,
                                periods: r,
                                offlineSessionIds: [],
                                minBufferTime: g || 0
                            })
                        }.bind(a))
                    }

                    function Od(a, b, c, d) {
                        var e = L(d, "mediaPresentationDuration", Nc),
                            f = [],
                            g = 0;
                        d = J(d, "Period");
                        for (var h = 0; h < d.length; h++) {
                            var l = d[h],
                                g = L(l, "start", Nc, g),
                                m = L(l, "duration", Nc),
                                q = null;
                            if (h != d.length - 1) {
                                var r = L(d[h + 1], "start", Nc);
                                null != r && (q = r - g)
                            } else null != e && (q = e - g);
                            null == q && (q = m);
                            l = Qd(a, b, c, {
                                start: g,
                                duration: q,
                                node: l,
                                ub: null == q || h == d.length - 1
                            });
                            f.push(l);
                            m = b.T.id;
                            a.i.every(ya(m)) && (a.a.filterPeriod(l), a.i.push(m), a.c && a.c.periods.push(l));
                            if (null == q) {
                                g = null;
                                break
                            }
                            g += q
                        }
                        return null != e ? {
                            periods: f,
                            duration: e
                        } : {
                            periods: f,
                            duration: g
                        }
                    }

                    function Qd(a, b, c, d) {
                        b.T = Rd(d.node, null, c);
                        b.R = d;
                        b.T.id || (b.T.id = "__shaka_period_" + d.start);
                        J(d.node, "EventStream").forEach(a.Fd.bind(a, d.start, d.duration));
                        c = J(d.node, "AdaptationSet").map(a.Dd.bind(a, b)).filter(xa);
                        var e = c.map(function (a) {
                                return a.Qd
                            }).reduce(w, []),
                            f = e.filter(za);
                        if (b.Ea && e.length != f.length) throw new t(2, 4, 4018);
                        var g = c.filter(function (a) {
                            return !a.Ob
                        });
                        c.filter(function (a) {
                            return a.Ob
                        }).forEach(function (a) {
                            var b = a.streams[0],
                                c = a.Ob;
                            g.forEach(function (a) {
                                a.id == c && a.streams.forEach(function (a) {
                                    a.trickModeVideo =
                                        b
                                })
                            })
                        });
                        e = Sd(g, "video");
                        f = Sd(g, "audio");
                        if (!e.length && !f.length) throw new t(2, 4, 4004);
                        f.length || (f = [null]);
                        e.length || (e = [null]);
                        b = [];
                        for (c = 0; c < f.length; c++)
                            for (var h = 0; h < e.length; h++) Td(a, f[c], e[h], b);
                        a = Sd(g, "text");
                        e = [];
                        for (c = 0; c < a.length; c++) e.push.apply(e, a[c].streams);
                        return {
                            startTime: d.start,
                            textStreams: e,
                            variants: b
                        }
                    }

                    function Sd(a, b) {
                        return a.filter(function (a) {
                            return a.contentType == b
                        })
                    }

                    function Td(a, b, c, d) {
                        if (b || c)
                            if (b && c) {
                                var e = b.drmInfos;
                                var f = c.drmInfos;
                                if (e.length && f.length ? 0 < tb(e, f).length : 1)
                                    for (var g = tb(b.drmInfos, c.drmInfos), e = 0; e < b.streams.length; e++)
                                        for (var h = 0; h < c.streams.length; h++) f = c.streams[h].bandwidth + b.streams[e].bandwidth, f = {
                                            id: a.h++,
                                            language: b.language,
                                            primary: b.vb || c.vb,
                                            audio: b.streams[e],
                                            video: c.streams[h],
                                            bandwidth: f,
                                            drmInfos: g,
                                            allowedByApplication: !0,
                                            allowedByKeySystem: !0
                                        }, d.push(f)
                            } else
                                for (g = b || c, e = 0; e < g.streams.length; e++) f = g.streams[e].bandwidth, f = {
                                    id: a.h++,
                                    language: g.language || "und",
                                    primary: g.vb,
                                    audio: b ? g.streams[e] : null,
                                    video: c ? g.streams[e] : null,
                                    bandwidth: f,
                                    drmInfos: g.drmInfos,
                                    allowedByApplication: !0,
                                    allowedByKeySystem: !0
                                }, d.push(f)
                    }
                    k.Dd = function (a, b) {
                        a.S = Rd(b, a.T, null);
                        var c = !1,
                            d = J(b, "Role"),
                            e = d.map(function (a) {
                                return a.getAttribute("value")
                            }).filter(xa),
                            f = void 0;
                        "text" == a.S.contentType && (f = "subtitle");
                        for (var g = 0; g < d.length; g++) {
                            var h = d[g].getAttribute("schemeIdUri");
                            if (null == h || "urn:mpeg:dash:role:2011" == h) switch (h = d[g].getAttribute("value"), h) {
                                case "main":
                                    c = !0;
                                    break;
                                case "caption":
                                case "subtitle":
                                    f = h
                            }
                        }
                        var l = null,
                            m = !1;
                        J(b, "EssentialProperty").forEach(function (a) {
                            "http://dashif.org/guidelines/trickmode" == a.getAttribute("schemeIdUri") ?
                                l = a.getAttribute("value") : m = !0
                        });
                        if (m) return null;
                        var d = J(b, "ContentProtection"),
                            q = Uc(d, this.b.dash.customScheme, this.b.dash.ignoreDrmInfo),
                            d = Tb(b.getAttribute("lang") || "und"),
                            h = b.getAttribute("label"),
                            g = J(b, "Representation"),
                            e = g.map(this.Gd.bind(this, a, q, f, d, h, c, e)).filter(function (a) {
                                return !!a
                            });
                        if (!e.length) throw new t(2, 4, 4003);
                        a.S.contentType && "application" != a.S.contentType || (a.S.contentType = Ud(e[0].mimeType, e[0].codecs), e.forEach(function (b) {
                            b.type = a.S.contentType
                        }));
                        e.forEach(function (a) {
                            q.drmInfos.forEach(function (b) {
                                a.keyId &&
                                    b.keyIds.push(a.keyId)
                            })
                        });
                        f = g.map(function (a) {
                            return a.getAttribute("id")
                        }).filter(xa);
                        return {
                            id: a.S.id || "__fake__" + this.h++,
                            contentType: a.S.contentType,
                            language: d,
                            vb: c,
                            streams: e,
                            drmInfos: q.drmInfos,
                            Ob: l,
                            Qd: f
                        }
                    };
                    k.Gd = function (a, b, c, d, e, f, g, h) {
                        a.w = Rd(h, a.S, null);
                        if (!Vd(a.w)) return null;
                        a.bandwidth = L(h, "bandwidth", Qc) || void 0;
                        var l = this.Rd.bind(this);
                        if (a.w.Ra) l = ud(a, l);
                        else if (a.w.pa) l = xd(a, this.j);
                        else if (a.w.Sa) l = Bd(a, l, this.j, !!this.c);
                        else {
                            var m = a.w.U,
                                q = a.R.duration || 0;
                            l = {
                                createSegmentIndex: Promise.resolve.bind(Promise),
                                findSegmentPosition: function (a) {
                                    return 0 <= a && a < q ? 1 : null
                                },
                                getSegmentReference: function (a) {
                                    return 1 != a ? null : new M(1, 0, q, function () {
                                        return m
                                    }, 0, null)
                                },
                                initSegmentReference: null,
                                presentationTimeOffset: 0
                            }
                        }
                        h =
                            J(h, "ContentProtection");
                        h = Xc(h, this.b.dash.customScheme, b, this.b.dash.ignoreDrmInfo);
                        return {
                            id: this.h++,
                            createSegmentIndex: l.createSegmentIndex,
                            findSegmentPosition: l.findSegmentPosition,
                            getSegmentReference: l.getSegmentReference,
                            initSegmentReference: l.initSegmentReference,
                            presentationTimeOffset: l.presentationTimeOffset,
                            mimeType: a.w.mimeType,
                            codecs: a.w.codecs,
                            frameRate: a.w.frameRate,
                            bandwidth: a.bandwidth,
                            width: a.w.width,
                            height: a.w.height,
                            kind: c,
                            encrypted: 0 < b.drmInfos.length,
                            keyId: h,
                            language: d,
                            label: e,
                            type: a.S.contentType,
                            primary: f,
                            trickModeVideo: null,
                            containsEmsgBoxes: a.w.containsEmsgBoxes,
                            roles: g
                        }
                    };
                    k.ie = function () {
                        this.f = null;
                        var a = Date.now();
                        Ld(this).then(function () {
                            this.a && Md(this, (Date.now() - a) / 1E3)
                        }.bind(this))["catch"](function (a) {
                            this.a && (a.severity = 1, this.a.onError(a), Md(this, 0))
                        }.bind(this))
                    };

                    function Md(a, b) {
                        0 > a.l || (a.f = window.setTimeout(a.ie.bind(a), 1E3 * Math.max(Math.max(3, a.l) - b, 0)))
                    }

                    function Rd(a, b, c) {
                        b = b || {
                            contentType: "",
                            mimeType: "",
                            codecs: "",
                            containsEmsgBoxes: !1,
                            frameRate: void 0
                        };
                        c = c || b.U;
                        var d = J(a, "BaseURL").map(Lc),
                            e = a.getAttribute("contentType") || b.contentType,
                            f = a.getAttribute("mimeType") || b.mimeType,
                            g = a.getAttribute("codecs") || b.codecs,
                            h = L(a, "frameRate", Sc) || b.frameRate,
                            l = !!J(a, "InbandEventStream").length;
                        e || (e = Ud(f, g));
                        return {
                            U: z(c, d),
                            Ra: Kc(a, "SegmentBase") || b.Ra,
                            pa: Kc(a, "SegmentList") || b.pa,
                            Sa: Kc(a, "SegmentTemplate") || b.Sa,
                            width: L(a, "width", Rc) || b.width,
                            height: L(a, "height",
                                Rc) || b.height,
                            contentType: e,
                            mimeType: f,
                            codecs: g,
                            frameRate: h,
                            containsEmsgBoxes: l || b.containsEmsgBoxes,
                            id: a.getAttribute("id")
                        }
                    }

                    function Vd(a) {
                        var b = 0 + (a.Ra ? 1 : 0);
                        b += a.pa ? 1 : 0;
                        b += a.Sa ? 1 : 0;
                        if (!b) return "text" == a.contentType || "application" == a.contentType ? !0 : !1;
                        1 != b && (a.Ra && (a.pa = null), a.Sa = null);
                        return !0
                    }

                    function Wd(a, b, c, d) {
                        b = z(b, [c]);
                        b = Ga(b, a.b.retryParameters);
                        b.method = d;
                        return a.a.networkingEngine.request(0, b).then(function (a) {
                            if ("HEAD" == d) {
                                if (!a.headers || !a.headers.date) return 0;
                                a = a.headers.date
                            } else a = E(a.data);
                            a = Date.parse(a);
                            return isNaN(a) ? 0 : a - Date.now()
                        })
                    }

                    function Pd(a, b, c, d) {
                        c = c.map(function (a) {
                            return {
                                scheme: a.getAttribute("schemeIdUri"),
                                value: a.getAttribute("value")
                            }
                        });
                        var e = a.b.dash.clockSyncUri;
                        d && !c.length && e && c.push({
                            scheme: "urn:mpeg:dash:utc:http-head:2014",
                            value: e
                        });
                        return wa(c, function (a) {
                            var c = a.value;
                            switch (a.scheme) {
                                case "urn:mpeg:dash:utc:http-head:2014":
                                case "urn:mpeg:dash:utc:http-head:2012":
                                    return Wd(this, b, c, "HEAD");
                                case "urn:mpeg:dash:utc:http-xsdate:2014":
                                case "urn:mpeg:dash:utc:http-iso:2014":
                                case "urn:mpeg:dash:utc:http-xsdate:2012":
                                case "urn:mpeg:dash:utc:http-iso:2012":
                                    return Wd(this,
                                        b, c, "GET");
                                case "urn:mpeg:dash:utc:direct:2014":
                                case "urn:mpeg:dash:utc:direct:2012":
                                    return a = Date.parse(c), isNaN(a) ? 0 : a - Date.now();
                                case "urn:mpeg:dash:utc:http-ntp:2014":
                                case "urn:mpeg:dash:utc:ntp:2014":
                                case "urn:mpeg:dash:utc:sntp:2014":
                                    return Promise.reject();
                                default:
                                    return Promise.reject()
                            }
                        }.bind(a))["catch"](function () {
                            return 0
                        })
                    }
                    k.Fd = function (a, b, c) {
                        var d = c.getAttribute("schemeIdUri") || "",
                            e = c.getAttribute("value") || "",
                            f = L(c, "timescale", Rc) || 1;
                        J(c, "Event").forEach(function (c) {
                            var g = L(c, "presentationTime", Rc) || 0,
                                l = L(c, "duration", Rc) || 0,
                                g = g / f + a,
                                l = g + l / f;
                            null != b && (g = Math.min(g, a + b), l = Math.min(l, a + b));
                            c = {
                                schemeIdUri: d,
                                value: e,
                                startTime: g,
                                endTime: l,
                                id: c.getAttribute("id") || "",
                                eventElement: c
                            };
                            this.a.onTimelineRegionAdded(c)
                        }.bind(this))
                    };
                    k.Rd = function (a, b, c) {
                        a = Ga(a, this.b.retryParameters);
                        null != b && (a.headers.Range = "bytes=" + b + "-" + (null != c ? c : ""));
                        return this.a.networkingEngine.request(1, a).then(function (a) {
                            return a.data
                        })
                    };

                    function Ud(a, b) {
                        return vb[Zb(a, b)] ? "text" : a.split("/")[0]
                    }
                    Hd.mpd = Kd;
                    Gd["application/dash+xml"] = Kd;

                    function Xd(a, b, c, d) {
                        this.uri = a;
                        this.type = b;
                        this.ga = c;
                        this.segments = d || null
                    }

                    function Yd(a, b, c, d) {
                        this.id = a;
                        this.name = b;
                        this.a = c;
                        this.value = d || null
                    }
                    Yd.prototype.toString = function () {
                        function a(a) {
                            return a.name + '="' + a.value + '"'
                        }
                        return this.value ? "#" + this.name + ":" + this.value : 0 < this.a.length ? "#" + this.name + ":" + this.a.map(a).join(",") : "#" + this.name
                    };

                    function Zd(a, b) {
                        this.name = a;
                        this.value = b
                    }
                    Yd.prototype.getAttribute = function (a) {
                        var b = this.a.filter(function (b) {
                            return b.name == a
                        });
                        return b.length ? b[0] : null
                    };

                    function $d(a, b, c) {
                        c = c || null;
                        return (a = a.getAttribute(b)) ? a.value : c
                    }

                    function ae(a, b) {
                        this.ga = b;
                        this.uri = a
                    };

                    function be(a, b) {
                        return a.filter(function (a) {
                            return a.name == b
                        })
                    }

                    function ce(a, b) {
                        var c = be(a, b);
                        return c.length ? c[0] : null
                    }

                    function de(a, b, c) {
                        return a.filter(function (a) {
                            var d = a.getAttribute("TYPE");
                            a = a.getAttribute("GROUP-ID");
                            return d.value == b && a.value == c
                        })
                    };

                    function ee(a) {
                        this.b = a;
                        this.a = 0
                    }

                    function fe(a, b) {
                        b.lastIndex = a.a;
                        var c = (c = b.exec(a.b)) ? {
                            position: c.index,
                            length: c[0].length,
                            Td: c
                        } : null;
                        if (a.a == a.b.length || !c || c.position != a.a) return null;
                        a.a += c.length;
                        return c.Td
                    }

                    function ge(a) {
                        return a.a == a.b.length ? null : (a = fe(a, /[^ \t\n]*/gm)) ? a[0] : null
                    };

                    function he() {
                        this.a = 0
                    }

                    function ie(a, b, c) {
                        b = E(b);
                        b = b.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n").trim();
                        var d = b.split(/\n+/m);
                        if (!/^#EXTM3U($|[ \t\n])/m.test(d[0])) throw new t(2, 4, 4015);
                        b = 0;
                        for (var e = [], f = 1; f < d.length;)
                            if (/^#(?!EXT)/m.test(d[f])) f += 1;
                            else {
                                var g = d[f];
                                g = je(a.a++, g);
                                if (0 <= ke.indexOf(g.name)) b = 1;
                                else if (0 <= le.indexOf(g.name)) {
                                    if (1 != b) throw new t(2, 4, 4017);
                                    d = d.splice(f, d.length - f);
                                    a = me(a, d);
                                    return new Xd(c, b, e, a)
                                }
                                e.push(g);
                                f += 1;
                                "EXT-X-STREAM-INF" == g.name && (g.a.push(new Zd("URI", d[f])), f += 1)
                            }
                        return new Xd(c, b, e)
                    }

                    function me(a, b) {
                        var c = [],
                            d = [];
                        b.forEach(function (a) {
                            /^(#EXT)/.test(a) ? (a = je(this.a++, a), d.push(a)) : /^#(?!EXT)/m.test(a) || (c.push(new ae(a.trim(), d)), d = [])
                        }.bind(a));
                        return c
                    }

                    function je(a, b) {
                        var c = b.match(/^#(EXT[^:]*)(?::(.*))?$/);
                        if (!c) throw new t(2, 4, 4016);
                        var d = c[1],
                            e = c[2],
                            c = [];
                        if (e && 0 <= e.indexOf("="))
                            for (var e = new ee(e), f, g = /([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g; f = fe(e, g);) c.push(new Zd(f[1], f[2] || f[3]));
                        else if (e) return new Yd(a, d, c, e);
                        return new Yd(a, d, c)
                    }
                    var ke = "EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-MAP EXT-X-I-FRAMES-ONLY".split(" "),
                        le = "EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE".split(" ");

                    function oe(a) {
                        return new Promise(function (b) {
                            var c = oe.parse(a);
                            b({
                                uri: a,
                                data: c.data,
                                headers: {
                                    "content-type": c.contentType
                                }
                            })
                        })
                    }
                    n("shaka.net.DataUriPlugin", oe);
                    oe.parse = function (a) {
                        var b = a.split(":");
                        if (2 > b.length || "data" != b[0]) throw new t(2, 1, 1004, a);
                        b = b.slice(1).join(":").split(",");
                        if (2 > b.length) throw new t(2, 1, 1004, a);
                        var c = b[0],
                            b = window.decodeURIComponent(b.slice(1).join(",")),
                            c = c.split(";"),
                            d = null;
                        1 < c.length && (d = c[1]);
                        if ("base64" == d) a = Za(b).buffer;
                        else {
                            if (d) throw new t(2, 1, 1005, a);
                            a = Va(b)
                        }
                        return {
                            data: a,
                            contentType: c[0]
                        }
                    };
                    Ea.data = oe;

                    function pe() {
                        this.b = this.c = null;
                        this.i = 1;
                        this.g = {};
                        this.f = {};
                        this.a = null;
                        this.j = "";
                        this.h = new he
                    }
                    n("shaka.hls.HlsParser", pe);
                    k = pe.prototype;
                    k.configure = function (a) {
                        this.b = a
                    };
                    k.start = function (a, b) {
                        this.c = b;
                        this.j = a;
                        return this.c.networkingEngine.request(0, Ga([a], this.b.retryParameters)).then(function (b) {
                            return qe(this, b.data, a)
                        }.bind(this))
                    };
                    k.stop = function () {
                        this.b = this.c = null;
                        this.g = {};
                        return Promise.resolve()
                    };
                    k.update = function () {};
                    k.onExpirationUpdated = function () {};

                    function qe(a, b, c) {
                        b = ie(a.h, b, c);
                        if (0 != b.type) throw new t(2, 4, 4022);
                        a.a = new R(null, 0);
                        return re(a, b).then(function (a) {
                            this.c.filterPeriod(a);
                            return {
                                presentationTimeline: this.a,
                                periods: [a],
                                offlineSessionIds: [],
                                minBufferTime: 0
                            }
                        }.bind(a))
                    }

                    function re(a, b) {
                        var c = be(b.ga, "EXT-X-STREAM-INF").map(function (a) {
                                return se(this, a, b)
                            }.bind(a)),
                            d = be(b.ga, "EXT-X-MEDIA").filter(function (a) {
                                return "SUBTITLES" == S(a, "TYPE")
                            }.bind(a)).map(function (a) {
                                return te(this, a, b)
                            }.bind(a));
                        return Promise.all(c).then(function (a) {
                            return Promise.all(d).then(function (b) {
                                var c = a.reduce(w, []);
                                ue(this, c);
                                return {
                                    startTime: 0,
                                    variants: c,
                                    textStreams: b
                                }
                            }.bind(this))
                        }.bind(a))
                    }

                    function se(a, b, c) {
                        var d = Number(S(b, "BANDWIDTH")),
                            e = $d(b, "CODECS", "avc1.42E01E,mp4a.40.2").split(","),
                            f = b.getAttribute("RESOLUTION"),
                            g = null,
                            h = null,
                            l = $d(b, "FRAME-RATE");
                        if (f) var m = f.value.split("x"),
                            g = m[0],
                            h = m[1];
                        var q = ve(a, c);
                        c = be(c.ga, "EXT-X-MEDIA");
                        var r = $d(b, "AUDIO"),
                            v = $d(b, "VIDEO");
                        r ? c = de(c, "AUDIO", r) : v && (c = de(c, "VIDEO", v));
                        c = c.map(function (a) {
                            return we(this, a, e, q)
                        }.bind(a));
                        var u = [],
                            x = [];
                        return Promise.all(c).then(function (a) {
                            r ? u = a : v && (x = a);
                            if (u.length || x.length)
                                if (u.length)
                                    if (S(b, "URI") == u[0].Od) {
                                        a =
                                            "audio";
                                        var c = !0
                                    } else a = "video";
                            else a = "audio";
                            else c = !1, 1 == e.length ? a = f || l ? "video" : "audio" : (a = "video", e = [e.join(",")]);
                            if (c) c = Promise.resolve();
                            else {
                                c = e;
                                var d = S(b, "URI");
                                c = ye(this, d, c, a, q, "und", !1, null)
                            }
                            return c
                        }.bind(a)).then(function (a) {
                            a && ("audio" == a.stream.type ? u = [a] : x = [a]);
                            return ze(this, u, x, d, g, h, l)
                        }.bind(a))
                    }

                    function ze(a, b, c, d, e, f, g) {
                        c.forEach(function (a) {
                            if (a = a.stream) a.width = Number(e) || void 0, a.height = Number(f) || void 0, a.frameRate = Number(g) || void 0
                        }.bind(a));
                        b.length || (b = [null]);
                        c.length || (c = [null]);
                        for (var h = [], l = 0; l < b.length; l++)
                            for (var m = 0; m < c.length; m++) {
                                var q = b[l] ? b[l].stream : null,
                                    r = c[m] ? c[m].stream : null,
                                    v = b[l] ? b[l].drmInfos : null,
                                    u = c[m] ? c[m].drmInfos : null;
                                if (q && r)
                                    if (v.length && u.length ? 0 < tb(v, u).length : 1) var x = tb(v, u);
                                    else continue;
                                else q ? x = v : r && (x = u);
                                h.push(Ae(a, q, r, d, x))
                            }
                        return h
                    }

                    function Ae(a, b, c, d, e) {
                        return {
                            id: a.i++,
                            language: b ? b.language : "und",
                            primary: !!b && b.primary || !!c && c.primary,
                            audio: b,
                            video: c,
                            bandwidth: d,
                            drmInfos: e,
                            allowedByApplication: !0,
                            allowedByKeySystem: !0
                        }
                    }

                    function te(a, b, c) {
                        S(b, "TYPE");
                        c = ve(a, c);
                        return we(a, b, [], c).then(function (a) {
                            return a.stream
                        })
                    }

                    function we(a, b, c, d) {
                        if (a.g[b.id]) return Promise.resolve().then(function () {
                            return this.g[b.id]
                        }.bind(a));
                        var e = S(b, "TYPE").toLowerCase();
                        "subtitles" == e && (e = "text");
                        var f = Tb($d(b, "LANGUAGE", "und")),
                            g = $d(b, "NAME"),
                            h = b.getAttribute("DEFAULT"),
                            l = b.getAttribute("AUTOSELECT"),
                            m = S(b, "URI");
                        return ye(a, m, c, e, d, f, !!h || !!l, g).then(function (a) {
                            return this.g[b.id] = a
                        }.bind(a))
                    }

                    function ye(a, b, c, d, e, f, g, h) {
                        var l = b;
                        b = z([a.j], [b])[0];
                        return a.c.networkingEngine.request(0, Ga([b], a.b.retryParameters)).then(function (a) {
                            a = ie(this.h, a.data, a.uri);
                            if (1 != a.type) throw new t(2, 4, 4017);
                            e = ve(this, a) || e;
                            var b = null;
                            "text" != d && (b = Be(a));
                            var m = ce(a.ga, "EXT-X-MEDIA-SEQUENCE"),
                                m = Ce(this, a, m ? Number(m.value) : 0);
                            this.a.Ia(0, m);
                            var v = m[m.length - 1].endTime - m[0].startTime,
                                u = this.a.Y();
                            (Infinity == u || u < v) && this.a.qa(v);
                            var x = De(d, c),
                                K = void 0;
                            "text" == d && (K = "subtitle");
                            var W = new Q(m),
                                Hb = [];
                            a.segments.forEach(function (a) {
                                a =
                                    be(a.ga, "EXT-X-KEY");
                                Hb.push.apply(Hb, a)
                            });
                            var tc = !1,
                                uc = [],
                                ne = null;
                            Hb.forEach(function (a) {
                                if ("NONE" != S(a, "METHOD")) {
                                    tc = !0;
                                    var b = S(a, "KEYFORMAT");
                                    if (a = (b = Ee[b]) ? b(a) : null) a.keyIds.length && (ne = a.keyIds[0]), uc.push(a)
                                }
                            });
                            if (tc && !uc.length) throw new t(2, 4, 4026);
                            return Fe(this, d, m[0].a()[0]).then(function (a) {
                                a = {
                                    id: this.i++,
                                    createSegmentIndex: Promise.resolve.bind(Promise),
                                    findSegmentPosition: W.find.bind(W),
                                    getSegmentReference: W.get.bind(W),
                                    initSegmentReference: b,
                                    presentationTimeOffset: e || 0,
                                    mimeType: a,
                                    codecs: x,
                                    kind: K,
                                    encrypted: tc,
                                    keyId: ne,
                                    language: f,
                                    label: h || null,
                                    type: d,
                                    primary: g,
                                    trickModeVideo: null,
                                    containsEmsgBoxes: !1,
                                    frameRate: void 0,
                                    width: void 0,
                                    height: void 0,
                                    bandwidth: void 0,
                                    roles: []
                                };
                                this.f[a.id] = W;
                                return {
                                    stream: a,
                                    Be: W,
                                    drmInfos: uc,
                                    Od: l
                                }
                            }.bind(this))
                        }.bind(a))
                    }

                    function Be(a) {
                        var b = be(a.ga, "EXT-X-MAP");
                        if (!b.length) return null;
                        if (1 < b.length) throw new t(2, 4, 4020);
                        var b = b[0],
                            c = S(b, "URI"),
                            d = z([a.uri], [c])[0];
                        a = 0;
                        c = null;
                        if (b = $d(b, "BYTERANGE")) a = b.split("@"), b = Number(a[0]), a = Number(a[1]), c = a + b - 1;
                        return new bd(function () {
                            return [d]
                        }, a, c)
                    }

                    function Ce(a, b, c) {
                        var d = b.segments,
                            e = [];
                        d.forEach(function (a) {
                            var f = a.ga,
                                h = z([b.uri], [a.uri])[0],
                                l = Ge(f).value.split(","),
                                l = Number(l[0]),
                                m;
                            (a = d.indexOf(a)) ? m = e[a - 1].endTime: m = 0;
                            var l = m + l,
                                q = 0,
                                r = null;
                            if (f = ce(f, "EXT-X-BYTERANGE")) f = f.value.split("@"), r = Number(f[0]), f[1] ? q = Number(f[1]) : q = e[a - 1].M, r = q + r - 1, a == d.length - 1 && (r = null);
                            e.push(new M(c + a, m, l, function () {
                                return [h]
                            }, q, r))
                        }.bind(a));
                        return e
                    }

                    function ue(a, b) {
                        b.forEach(function (a) {
                            var b = this.a.Y(),
                                c = a.video;
                            a = a.audio;
                            c && this.f[c.id] && jd(this.f[c.id], b);
                            a && this.f[a.id] && jd(this.f[a.id], b)
                        }.bind(a))
                    }

                    function De(a, b) {
                        if (1 == b.length) return b[0];
                        if ("text" == a) return "";
                        var c = He;
                        "audio" == a && (c = Ie);
                        for (var d = 0; d < c.length; d++)
                            for (var e = 0; e < b.length; e++)
                                if (c[d].test(b[e].trim())) return b[e].trim();
                        throw new t(2, 4, 4025, b);
                    }

                    function Fe(a, b, c) {
                        var d = c.split("."),
                            e = d[d.length - 1];
                        if ("text" == b) return Promise.resolve("text/vtt");
                        d = Je;
                        "video" == b && (d = Ke);
                        if (b = d[e]) return Promise.resolve(b);
                        c = Ga([c], a.b.retryParameters);
                        c.method = "HEAD";
                        return a.c.networkingEngine.request(1, c).then(function (a) {
                            a = a.headers["content-type"];
                            if (!a) throw new t(2, 4, 4021, e);
                            return a
                        })
                    }

                    function ve(a, b) {
                        var c = ce(b.ga, "EXT-X-START");
                        return c ? Number(S(c, "TIME-OFFSET")) : a.b.hls.defaultTimeOffset
                    }

                    function S(a, b) {
                        var c = a.getAttribute(b);
                        if (!c) throw new t(2, 4, 4023, b);
                        return c.value
                    }

                    function Ge(a) {
                        a = ce(a, "EXTINF");
                        if (!a) throw new t(2, 4, 4024, "EXTINF");
                        return a
                    }
                    var He = [/^(avc)/, /^(hvc)/, /^(vp[8-9])$/, /^(av1)$/, /^(mp4v)/],
                        Ie = [/^(vorbis)/, /^(opus)/, /^(mp4a)/, /^(ac-3)$/, /^(ec-3)$/],
                        Je = {
                            mp4: "audio/mp4",
                            m4s: "audio/mp4",
                            m4i: "audio/mp4",
                            m4a: "audio/mp4",
                            ts: "video/mp2t"
                        },
                        Ke = {
                            mp4: "video/mp4",
                            m4s: "video/mp4",
                            m4i: "video/mp4",
                            m4v: "video/mp4",
                            ts: "video/mp2t"
                        },
                        Ee = {
                            "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": function (a) {
                                if ("SAMPLE-AES-CENC" != S(a, "METHOD")) return null;
                                var b = S(a, "URI"),
                                    b = oe.parse(b),
                                    b = new Uint8Array(b.data),
                                    b = Aa("com.widevine.alpha", [{
                                        initDataType: "cenc",
                                        initData: b
                                    }]);
                                if (a = $d(a, "KEYID")) b.keyIds = [a.substr(2).toLowerCase()];
                                return b
                            }
                        };
                    Hd.m3u8 = pe;
                    Gd["application/x-mpegurl"] = pe;
                    Gd["application/vnd.apple.mpegurl"] = pe;

                    function Le() {}
                    Le.prototype.parseInit = function () {};
                    Le.prototype.parseMedia = function (a, b) {
                        var c = E(a),
                            d = [],
                            e = new DOMParser,
                            f = null;
                        try {
                            f = e.parseFromString(c, "text/xml")
                        } catch (Hb) {
                            throw new t(2, 2, 2005);
                        }
                        if (f) {
                            var g = f.getElementsByTagName("tt")[0];
                            if (g) {
                                e = g.getAttribute("ttp:frameRate");
                                f = g.getAttribute("ttp:subFrameRate");
                                var h = g.getAttribute("ttp:frameRateMultiplier");
                                var l = g.getAttribute("ttp:tickRate");
                                c = g.getAttribute("xml:space") || "default"
                            } else throw new t(2, 2, 2005);
                            if ("default" != c && "preserve" != c) throw new t(2, 2, 2005);
                            c = "default" == c;
                            e = new Me(e,
                                f, h, l);
                            f = Ne(g.getElementsByTagName("styling")[0]);
                            h = Ne(g.getElementsByTagName("layout")[0]);
                            g = Ne(g.getElementsByTagName("body")[0]);
                            for (l = 0; l < g.length; l++) {
                                var m = g[l],
                                    q = b.periodStart,
                                    r = e;
                                var v = f;
                                var u = h,
                                    x = c;
                                if (m.hasAttribute("begin") || m.hasAttribute("end") || !/^\s*$/.test(m.textContent)) {
                                    Oe(m, x);
                                    var x = Pe(m.getAttribute("begin"), r),
                                        K = Pe(m.getAttribute("end"), r),
                                        r = Pe(m.getAttribute("dur"), r),
                                        W = m.textContent;
                                    null == K && null != r && (K = x + r);
                                    if (null == x || null == K) throw new t(2, 2, 2001);
                                    if (q = yb(x + q, K + q, W)) {
                                        x = Qe(m,
                                            "region", u);
                                        u = q;
                                        if (K = Re(m, x, v, "tts:extent"))
                                            if (r = Se.exec(K)) u.size = Number(r[1]);
                                        r = Re(m, x, v, "tts:writingMode");
                                        K = !0;
                                        "tb" == r || "tblr" == r ? u.vertical = "lr" : "tbrl" == r ? u.vertical = "rl" : K = !1;
                                        if (r = Re(m, x, v, "tts:origin"))
                                            if (r = Se.exec(r)) K ? (u.position = Number(r[2]), u.line = Number(r[1])) : (u.position = Number(r[1]), u.line = Number(r[2])), u.snapToLines = !1;
                                        if (v = Re(m, x, v, "tts:textAlign")) u.align = v, "center" == v && ("center" != u.align && (u.align = "middle"), u.position = "auto"), u.positionAlign = Te[v], u.lineAlign = Ue[v];
                                        v = q
                                    } else v = null
                                } else v =
                                    null;
                                v && d.push(v)
                            }
                        }
                        return d
                    };
                    var Ve = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
                        We = /^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,
                        Xe = /^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,
                        Ye = /^(\d*\.?\d*)f$/,
                        Ze = /^(\d*\.?\d*)t$/,
                        $e = /^(?:(\d*\.?\d*)h)?(?:(\d*\.?\d*)m)?(?:(\d*\.?\d*)s)?(?:(\d*\.?\d*)ms)?$/,
                        Se = /^(\d{1,2}|100)% (\d{1,2}|100)%$/,
                        Ue = {
                            left: "start",
                            center: "center",
                            right: "end",
                            start: "start",
                            end: "end"
                        },
                        Te = {
                            left: "line-left",
                            center: "center",
                            right: "line-right"
                        };

                    function Ne(a) {
                        var b = [];
                        if (!a) return b;
                        for (var c = a.childNodes, d = 0; d < c.length; d++) {
                            var e = "span" == c[d].nodeName && "p" == a.nodeName;
                            c[d].nodeType != Node.ELEMENT_NODE || "br" == c[d].nodeName || e || (e = Ne(c[d]), b = b.concat(e))
                        }
                        b.length || b.push(a);
                        return b
                    }

                    function Oe(a, b) {
                        for (var c = a.childNodes, d = 0; d < c.length; d++)
                            if ("br" == c[d].nodeName && 0 < d) c[d - 1].textContent += "\n";
                            else if (0 < c[d].childNodes.length) Oe(c[d], b);
                        else if (b) {
                            var e = c[d].textContent.trim(),
                                e = e.replace(/\s+/g, " ");
                            c[d].textContent = e
                        }
                    }

                    function Re(a, b, c, d) {
                        for (var e = Ne(b), f = 0; f < e.length; f++) {
                            var g = e[f].getAttribute(d);
                            if (g) return g
                        }
                        e = Qe;
                        return (a = e(b, "style", c) || e(a, "style", c)) ? a.getAttribute(d) : null
                    }

                    function Qe(a, b, c) {
                        if (!a || 1 > c.length) return null;
                        var d = null,
                            e = a;
                        for (a = null; e && !(a = e.getAttribute(b)) && (e = e.parentNode, e instanceof Element););
                        if (b = a)
                            for (a = 0; a < c.length; a++)
                                if (c[a].getAttribute("xml:id") == b) {
                                    d = c[a];
                                    break
                                }
                        return d
                    }

                    function Pe(a, b) {
                        var c = null;
                        if (Ve.test(a)) var c = Ve.exec(a),
                            d = Number(c[1]),
                            e = Number(c[2]),
                            f = Number(c[3]),
                            g = Number(c[4]),
                            g = g + (Number(c[5]) || 0) / b.b,
                            f = f + g / b.frameRate,
                            c = f + 60 * e + 3600 * d;
                        else We.test(a) ? c = af(We, a) : Xe.test(a) ? c = af(Xe, a) : Ye.test(a) ? (c = Ye.exec(a), c = Number(c[1]) / b.frameRate) : Ze.test(a) ? (c = Ze.exec(a), c = Number(c[1]) / b.a) : $e.test(a) && (c = af($e, a));
                        return c
                    }

                    function af(a, b) {
                        var c = a.exec(b);
                        return c && "" != c[0] ? (Number(c[4]) || 0) / 1E3 + (Number(c[3]) || 0) + 60 * (Number(c[2]) || 0) + 3600 * (Number(c[1]) || 0) : null
                    }

                    function Me(a, b, c, d) {
                        this.frameRate = Number(a) || 30;
                        this.b = Number(b) || 1;
                        this.a = Number(d);
                        this.a || (this.a = a ? this.frameRate * this.b : 1);
                        c && (a = /^(\d+) (\d+)$/g.exec(c)) && (this.frameRate *= a[1] / a[2])
                    }
                    wb("application/ttml+xml", Le);

                    function bf() {
                        this.a = new Le
                    }
                    bf.prototype.parseInit = function (a) {
                        var b = !1;
                        (new O).C("moov", P).C("trak", P).C("mdia", P).C("minf", P).C("stbl", P).da("stsd", fd).C("stpp", function () {
                            b = !0
                        }).parse(a);
                        if (!b) throw new t(2, 2, 2007);
                    };
                    bf.prototype.parseMedia = function (a, b) {
                        var c = !1,
                            d = [];
                        (new O).C("mdat", gd(function (a) {
                            c = !0;
                            d = this.a.parseMedia(a.buffer, b)
                        }.bind(this))).parse(a);
                        if (!c) throw new t(2, 2, 2007);
                        return d
                    };
                    wb('application/mp4; codecs="stpp"', bf);

                    function cf() {}
                    cf.prototype.parseInit = function () {};
                    cf.prototype.parseMedia = function (a, b) {
                        var c = E(a),
                            c = c.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n"),
                            c = c.split(/\n{2,}/m);
                        if (!/^WEBVTT($|[ \t\n])/m.test(c[0])) throw new t(2, 2, 2E3);
                        var d = b.segmentStart;
                        if (0 <= c[0].indexOf("X-TIMESTAMP-MAP")) {
                            var e = c[0].match(/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m),
                                f = c[0].match(/MPEGTS:(\d+)/m);
                            e && f && (d = df(new ee(e[1])), d = b.periodStart + (Number(f[1]) / 9E4 - d))
                        }
                        f = [];
                        for (e = 1; e < c.length; e++) {
                            var g = c[e].split("\n"),
                                h = d;
                            if (1 == g.length && !g[0] || /^NOTE($|[ \t])/.test(g[0])) var l =
                                null;
                            else {
                                l = null;
                                0 > g[0].indexOf("--\x3e") && (l = g[0], g.splice(0, 1));
                                var m = new ee(g[0]),
                                    q = df(m),
                                    r = fe(m, /[ \t]+--\x3e[ \t]+/g),
                                    v = df(m);
                                if (null == q || !r || null == v) throw new t(2, 2, 2001);
                                if (g = yb(q + h, v + h, g.slice(1).join("\n").trim())) {
                                    fe(m, /[ \t]+/gm);
                                    for (h = ge(m); h;) ef(g, h), fe(m, /[ \t]+/gm), h = ge(m);
                                    null != l && (g.id = l);
                                    l = g
                                } else l = null
                            }
                            l && f.push(l)
                        }
                        return f
                    };

                    function ef(a, b) {
                        var c;
                        if (c = /^align:(start|middle|center|end|left|right)$/.exec(b)) a.align = c[1], "center" == c[1] && "center" != a.align && (a.position = "auto", a.align = "middle");
                        else if (c = /^vertical:(lr|rl)$/.exec(b)) a.vertical = c[1];
                        else if (c = /^size:(\d{1,2}|100)%$/.exec(b)) a.size = Number(c[1]);
                        else if (c = /^position:(\d{1,2}|100)%(?:,(line-left|line-right|center|start|end))?$/.exec(b)) a.position = Number(c[1]), c[2] && (a.positionAlign = c[2]);
                        else if (c = /^line:(\d{1,2}|100)%(?:,(start|end|center))?$/.exec(b)) a.snapToLines = !1, a.line = Number(c[1]), c[2] && (a.lineAlign = c[2]);
                        else if (c = /^line:(-?\d+)(?:,(start|end|center))?$/.exec(b)) a.snapToLines = !0, a.line = Number(c[1]), c[2] && (a.lineAlign = c[2])
                    }

                    function df(a) {
                        a = fe(a, /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3})/g);
                        if (!a) return null;
                        var b = Number(a[2]),
                            c = Number(a[3]);
                        return 59 < b || 59 < c ? null : Number(a[4]) / 1E3 + c + 60 * b + 3600 * (Number(a[1]) || 0)
                    }
                    wb("text/vtt", cf);
                    wb('text/vtt; codecs="vtt"', cf);

                    function ff() {
                        this.a = null
                    }
                    ff.prototype.parseInit = function (a) {
                        var b = !1;
                        (new O).C("moov", P).C("trak", P).C("mdia", P).da("mdhd", function (a) {
                            0 == a.version ? (a.s.I(4), a.s.I(4), this.a = a.s.D(), a.s.I(4)) : (a.s.I(8), a.s.I(8), this.a = a.s.D(), a.s.I(8));
                            a.s.I(4)
                        }.bind(this)).C("minf", P).C("stbl", P).da("stsd", fd).C("wvtt", function () {
                            b = !0
                        }).parse(a);
                        if (!this.a) throw new t(2, 2, 2008);
                        if (!b) throw new t(2, 2, 2008);
                    };
                    ff.prototype.parseMedia = function (a, b) {
                        var c = 0,
                            d = [],
                            e = [],
                            f = [],
                            g = !1,
                            h = !1,
                            l = !1;
                        (new O).C("moof", P).C("traf", P).da("tfdt", function (a) {
                            g = !0;
                            c = a.version ? a.s.Qa() : a.s.D()
                        }).da("trun", function (a) {
                            h = !0;
                            var b = a.version,
                                c = a.Nc;
                            a = a.s;
                            var e = a.D();
                            c & 1 && a.I(4);
                            c & 4 && a.I(4);
                            for (var f = [], g = 0; g < e; g++) {
                                var l = {
                                    duration: null,
                                    Nb: null
                                };
                                c & 256 && (l.duration = a.D());
                                c & 512 && a.I(4);
                                c & 1024 && a.I(4);
                                c & 2048 && (l.Nb = b ? a.nc() : a.D());
                                f.push(l)
                            }
                            d = f
                        }).C("vtte", function () {
                            e.push(null)
                        }).C("vttc", gd(function (a) {
                            e.push(a.buffer)
                        })).C("mdat",
                            function (a) {
                                l = !0;
                                P(a)
                            }).parse(a);
                        if (!l && !g && !h) throw new t(2, 2, 2008);
                        for (var m = c, q = 0; q < d.length; q++) {
                            var r = d[q],
                                v = e[q];
                            if (r.duration) {
                                var u = r.Nb ? c + r.Nb : m,
                                    m = u + r.duration;
                                v && f.push(gf(v, b.periodStart + u / this.a, b.periodStart + m / this.a))
                            }
                        }
                        return f.filter(xa)
                    };

                    function gf(a, b, c) {
                        var d, e, f;
                        (new O).C("payl", gd(function (a) {
                            d = E(a)
                        })).C("iden", gd(function (a) {
                            e = E(a)
                        })).C("sttg", gd(function (a) {
                            f = E(a)
                        })).parse(a);
                        return d ? hf(d, e, f, b, c) : null
                    }

                    function hf(a, b, c, d, e) {
                        (a = yb(d, e, a)) && b && (a.id = b);
                        if (a && c)
                            for (b = new ee(c), c = ge(b); c;) ef(a, c), fe(b, /[ \t]+/gm), c = ge(b);
                        return a
                    }
                    wb('application/mp4; codecs="wvtt"', ff);

                    function jf(a, b, c, d, e, f) {
                        this.a = a;
                        this.c = b;
                        this.l = c;
                        this.B = d;
                        this.O = e;
                        this.J = f;
                        this.b = new C;
                        this.h = !1;
                        this.g = 1;
                        this.j = this.f = null;
                        this.G = a.readyState;
                        this.i = !1;
                        this.v = this.A = -1;
                        this.o = !1;
                        0 < a.readyState ? this.fc() : Ma(this.b, a, "loadedmetadata", this.fc.bind(this));
                        b = this.hc.bind(this);
                        D(this.b, a, "ratechange", this.rd.bind(this));
                        D(this.b, a, "waiting", b);
                        this.j = setInterval(b, 250)
                    }
                    k = jf.prototype;
                    k.m = function () {
                        var a = this.b.m();
                        this.b = null;
                        null != this.f && (window.clearInterval(this.f), this.f = null);
                        null != this.j && (window.clearInterval(this.j), this.j = null);
                        this.J = this.O = this.l = this.c = this.a = null;
                        return a
                    };

                    function kf(a, b) {
                        0 < a.a.readyState ? a.a.currentTime = lf(a, b) : a.B = b
                    }

                    function mf(a) {
                        return 0 < a.a.readyState ? lf(a, a.a.currentTime) : nf(a)
                    }

                    function nf(a) {
                        if (a.B) return lf(a, a.B);
                        a = a.c.presentationTimeline;
                        return Infinity > a.Y() ? a.na() : a.cb()
                    }
                    k.rb = function () {
                        return this.g
                    };

                    function of (a, b) {
                        null != a.f && (window.clearInterval(a.f), a.f = null);
                        a.g = b;
                        a.a.playbackRate = a.h || 0 > b ? 0 : b;
                        !a.h && 0 > b && (a.f = window.setInterval(function () {
                            this.a.currentTime += b / 4
                        }.bind(a), 250))
                    }
                    k.Ab = function () {
                        this.o = !0;
                        this.hc()
                    };
                    k.rd = function () {
                        this.a.playbackRate != (this.h || 0 > this.g ? 0 : this.g) && of (this, this.a.playbackRate)
                    };
                    k.fc = function () {
                        var a = nf(this);
                        .001 > Math.abs(this.a.currentTime - a) ? (D(this.b, this.a, "seeking", this.ic.bind(this)), D(this.b, this.a, "playing", this.gc.bind(this))) : (Ma(this.b, this.a, "seeking", this.td.bind(this)), this.a.currentTime = a)
                    };
                    k.td = function () {
                        D(this.b, this.a, "seeking", this.ic.bind(this));
                        D(this.b, this.a, "playing", this.gc.bind(this))
                    };
                    k.hc = function () {
                        if (this.a.readyState) {
                            this.a.readyState != this.G && (this.i = !1, this.G = this.a.readyState);
                            var a = this.l.smallGapLimit,
                                b = this.a.currentTime,
                                c = this.a.buffered;
                            a: {
                                if (c && c.length && !(1 == c.length && 1E-6 > c.end(0) - c.start(0))) {
                                    var d = .1;
                                    /(Edge\/|Trident\/|Tizen)/.test(navigator.userAgent) && (d = .5);
                                    for (var e = 0; e < c.length; e++)
                                        if (c.start(e) > b && (!e || c.end(e - 1) - b <= d)) {
                                            d = e;
                                            break a
                                        }
                                }
                                d = null
                            }
                            if (null == d) {
                                if (3 > this.a.readyState && 0 < this.a.playbackRate)
                                    if (this.v != b) this.v = b, this.A = Date.now();
                                    else if (this.A < Date.now() -
                                    1E3)
                                    for (this.A = Date.now() + 5E3, d = 0; d < c.length; d++)
                                        if (b >= c.start(d) && b < c.end(d) - .5) {
                                            this.a.currentTime += .1;
                                            this.v = this.a.currentTime;
                                            break
                                        }
                            } else if (d || this.o)
                                if (e = c.start(d), !(e >= this.c.presentationTimeline.cb())) {
                                    var f = e - b,
                                        a = f <= a,
                                        g = !1;
                                    a || this.i || (this.i = !0, f = new G("largegap", {
                                        currentTime: b,
                                        gapSize: f
                                    }), f.cancelable = !0, this.J(f), this.l.jumpLargeGaps && !f.defaultPrevented && (g = !0));
                                    if (a || g) d && c.end(d - 1), pf(this, b, e)
                                }
                        }
                    };
                    k.ic = function () {
                        this.o = !1;
                        var a = this.a.currentTime,
                            b = qf(this, a);
                        .001 < Math.abs(b - a) ? pf(this, a, b) : (this.i = !1, this.O())
                    };
                    k.gc = function () {
                        var a = this.a.currentTime,
                            b = qf(this, a);
                        .001 < Math.abs(b - a) && pf(this, a, b)
                    };

                    function qf(a, b) {
                        var c = Cb.bind(null, a.a.buffered),
                            d = 1 * Math.max(a.c.minBufferTime || 0, a.l.rebufferingGoal),
                            e = a.c.presentationTimeline,
                            f = e.va(),
                            g = e.Fa(d),
                            h = e.Fa(5),
                            d = e.Fa(d + 5);
                        return b > f ? f : b < e.Fa(0) ? c(h) ? h : d : b >= g || c(b) ? b : d
                    }

                    function pf(a, b, c) {
                        a.a.currentTime = c;
                        var d = 0,
                            e = function () {
                                !this.a || 10 <= d++ || this.a.currentTime != b || (this.a.currentTime = c, setTimeout(e, 100))
                            }.bind(a);
                        setTimeout(e, 100)
                    }

                    function lf(a, b) {
                        var c = a.c.presentationTimeline.na();
                        if (b < c) return c;
                        c = a.c.presentationTimeline.va();
                        return b > c ? c : b
                    };

                    function rf(a, b, c, d, e, f) {
                        this.a = a;
                        this.g = b;
                        this.A = c;
                        this.l = d;
                        this.h = e;
                        this.B = f;
                        this.c = [];
                        this.j = new C;
                        this.b = !1;
                        this.i = -1;
                        this.f = null;
                        sf(this)
                    }
                    rf.prototype.m = function () {
                        var a = this.j ? this.j.m() : Promise.resolve();
                        this.j = null;
                        tf(this);
                        this.B = this.h = this.l = this.A = this.g = this.a = null;
                        this.c = [];
                        return a
                    };
                    rf.prototype.v = function (a) {
                        if (!this.c.some(function (b) {
                                return b.info.schemeIdUri == a.schemeIdUri && b.info.startTime == a.startTime && b.info.endTime == a.endTime
                            })) {
                            var b = {
                                info: a,
                                status: 1
                            };
                            this.c.push(b);
                            var c = new G("timelineregionadded", {
                                detail: uf(a)
                            });
                            this.h(c);
                            this.o(!0, b)
                        }
                    };

                    function uf(a) {
                        var b = Da(a);
                        b.eventElement = a.eventElement;
                        return b
                    }
                    rf.prototype.o = function (a, b) {
                        var c = b.info.startTime > this.a.currentTime ? 1 : b.info.endTime < this.a.currentTime ? 3 : 2,
                            d = 2 == b.status,
                            e = 2 == c;
                        if (c != b.status) {
                            if (!a || d || e) d || this.h(new G("timelineregionenter", {
                                detail: uf(b.info)
                            })), e || this.h(new G("timelineregionexit", {
                                detail: uf(b.info)
                            }));
                            b.status = c
                        }
                    };

                    function sf(a) {
                        tf(a);
                        a.f = window.setTimeout(a.G.bind(a), 250)
                    }

                    function tf(a) {
                        a.f && (window.clearTimeout(a.f), a.f = null)
                    }
                    rf.prototype.G = function () {
                        this.f = null;
                        sf(this);
                        var a = ic(this.g, this.a.currentTime);
                        a != this.i && (-1 != this.i && this.B(), this.i = a);
                        var a = Db(this.a.buffered, this.a.currentTime),
                            b = Bb(this.a.buffered) >= this.g.presentationTimeline.va() - .1 || this.a.ended;
                        if (this.b) {
                            var c = 1 * Math.max(this.g.minBufferTime || 0, this.A.rebufferingGoal);
                            (b || a >= c) && 0 != this.b && (this.b = !1, this.l(!1))
                        } else !b && .5 > a && 1 != this.b && (this.b = !0, this.l(!0));
                        this.c.forEach(this.o.bind(this, !1))
                    };

                    function vf(a, b) {
                        this.a = b;
                        this.b = a;
                        this.g = null;
                        this.i = 1;
                        this.o = Promise.resolve();
                        this.h = [];
                        this.j = {};
                        this.c = {};
                        this.f = this.l = this.v = !1
                    }
                    k = vf.prototype;
                    k.m = function () {
                        for (var a in this.c) wf(this.c[a]);
                        this.g = this.c = this.j = this.h = this.o = this.b = this.a = null;
                        this.f = !0;
                        return Promise.resolve()
                    };
                    k.configure = function (a) {
                        this.g = a
                    };
                    k.init = function () {
                        var a = this.a.bc(this.b.periods[ic(this.b, mf(this.a.Pa))]);
                        return Na(a) ? Promise.reject(new t(2, 5, 5005)) : xf(this, a).then(function () {
                            this.a && this.a.jd && this.a.jd()
                        }.bind(this))
                    };

                    function T(a) {
                        return a.b.periods[ic(a.b, mf(a.a.Pa))]
                    }

                    function yf(a) {
                        return Pa(a.c, function (a) {
                            return a.oa || a.stream
                        })
                    }

                    function zf(a, b) {
                        var c = {};
                        c.text = b;
                        return xf(a, c)
                    }

                    function Af(a, b) {
                        var c = a.c.video;
                        if (c) {
                            var d = c.stream;
                            if (d)
                                if (b) {
                                    var e = d.trickModeVideo;
                                    if (e) {
                                        var f = c.oa;
                                        f || (Bf(a, "video", e, !1), c.oa = d)
                                    }
                                } else if (f = c.oa) c.oa = null, Bf(a, "video", f, !0)
                        }
                    }

                    function Bf(a, b, c, d) {
                        var e = a.c[b];
                        if (!e && "text" == b && a.g.ignoreTextStreamFailures) zf(a, c);
                        else if (e) {
                            var f = jc(a.b, c);
                            d && f != e.xa ? Cf(a) : (e.oa && (c.trickModeVideo ? (e.oa = c, c = c.trickModeVideo) : e.oa = null), (f = a.h[f]) && f.Ma && (f = a.j[c.id]) && f.Ma && e.stream != c && ("text" == b && Gb(a.a.K, Zb(c.mimeType, c.codecs)), e.stream = c, e.eb = !0, d && (e.ta ? e.kb = !0 : e.ya ? (e.sa = !0, e.kb = !0) : (wf(e), Df(a, e, !0)))))
                        }
                    }

                    function Ef(a) {
                        var b = mf(a.a.Pa);
                        Object.keys(a.c).every(function (a) {
                            var c = this.a.K;
                            "text" == a ? (a = c.a, a = b >= a.b && b < a.a) : (a = Jb(c, a), a = Cb(a, b));
                            return a
                        }.bind(a)) || Cf(a)
                    }

                    function Cf(a) {
                        for (var b in a.c) {
                            var c = a.c[b];
                            c.ta || c.sa || (c.ya ? c.sa = !0 : null == Ib(a.a.K, b) ? null == c.ra && Ff(a, c, 0) : (wf(c), Df(a, c, !1)))
                        }
                    }

                    function xf(a, b, c) {
                        var d = ic(a.b, mf(a.a.Pa)),
                            e = Pa(b, function (a) {
                                return Zb(a.mimeType, a.codecs)
                            });
                        a.a.K.init(e);
                        Gf(a);
                        e = Oa(b);
                        return Hf(a, e).then(function () {
                            if (!this.f)
                                for (var a in b) {
                                    var e = b[a];
                                    this.c[a] || (this.c[a] = {
                                        stream: e,
                                        type: a,
                                        Ga: null,
                                        ea: null,
                                        oa: null,
                                        eb: !0,
                                        xa: d,
                                        endOfStream: !1,
                                        ya: !1,
                                        ra: null,
                                        sa: !1,
                                        kb: !1,
                                        ta: !1,
                                        Gb: !1,
                                        tb: !1,
                                        rc: c || 0
                                    }, Ff(this, this.c[a], 0))
                                }
                        }.bind(a))
                    }

                    function If(a, b) {
                        var c = a.h[b];
                        if (c) return c.L;
                        c = {
                            L: new A,
                            Ma: !1
                        };
                        a.h[b] = c;
                        var d = a.b.periods[b].variants.map(function (a) {
                            var b = [];
                            a.audio && b.push(a.audio);
                            a.video && b.push(a.video);
                            a.video && a.video.trickModeVideo && b.push(a.video.trickModeVideo);
                            return b
                        }).reduce(w, []).filter(za);
                        d.push.apply(d, a.b.periods[b].textStreams);
                        a.o = a.o.then(function () {
                            if (!this.f) return Hf(this, d)
                        }.bind(a)).then(function () {
                            this.f || (this.h[b].L.resolve(), this.h[b].Ma = !0)
                        }.bind(a))["catch"](function (a) {
                            this.f || (this.h[b].L.reject(),
                                delete this.h[b], this.a.onError(a))
                        }.bind(a));
                        return c.L
                    }

                    function Hf(a, b) {
                        b.map(function (a) {
                            return a.id
                        }).filter(za);
                        for (var c = [], d = 0; d < b.length; ++d) {
                            var e = b[d];
                            var f = a.j[e.id];
                            f ? c.push(f.L) : (a.j[e.id] = {
                                L: new A,
                                Ma: !1
                            }, c.push(e.createSegmentIndex()))
                        }
                        return Promise.all(c).then(function () {
                            if (!this.f)
                                for (var a = 0; a < b.length; ++a) {
                                    var c = this.j[b[a].id];
                                    c.Ma || (c.L.resolve(), c.Ma = !0)
                                }
                        }.bind(a))["catch"](function (a) {
                            if (!this.f) return this.j[e.id].L.reject(), delete this.j[e.id], Promise.reject(a)
                        }.bind(a))
                    }

                    function Gf(a) {
                        var b = a.b.presentationTimeline.Y();
                        Infinity > b ? a.a.K.qa(b) : a.a.K.qa(Math.pow(2, 32))
                    }
                    k.le = function (a) {
                        if (!this.f && !a.ya && null != a.ra && !a.ta)
                            if (a.ra = null, a.sa) Df(this, a, a.kb);
                            else {
                                try {
                                    var b = Jf(this, a);
                                    null != b && (Ff(this, a, b), a.tb = !1)
                                } catch (c) {
                                    this.a.onError(c);
                                    return
                                }
                                b = Oa(this.c);
                                Kf(this, a);
                                b.every(function (a) {
                                    return a.endOfStream
                                }) && this.a.K.endOfStream().then(function () {
                                    this.b.presentationTimeline.qa(this.a.K.Y())
                                }.bind(this))
                            }
                    };

                    function Jf(a, b) {
                        var c = mf(a.a.Pa),
                            d = b.Ga && b.ea ? a.b.periods[jc(a.b, b.Ga)].startTime + b.ea.endTime : Math.max(c, b.rc),
                            e = jc(a.b, b.stream),
                            f = ic(a.b, d);
                        var g = a.a.K;
                        var h = b.type;
                        "text" == h ? (g = g.a, g = null == g.a || g.a < c ? 0 : g.a - Math.max(c, g.b)) : (g = Jb(g, h), g = Db(g, c));
                        h = Math.max(a.i * Math.max(a.b.minBufferTime || 0, a.g.rebufferingGoal), a.i * a.g.bufferingGoal);
                        if (d >= a.b.presentationTimeline.Y()) return b.endOfStream = !0, null;
                        b.endOfStream = !1;
                        b.xa = f;
                        if (f != e) return null;
                        if (g >= h) return .5;
                        d = a.a.K;
                        f = b.type;
                        d = "text" == f ? d.a.a : Bb(Jb(d,
                            f));
                        b.ea && b.stream == b.Ga ? (f = b.ea.position + 1, d = Lf(a, b, e, f)) : (f = b.ea ? b.stream.findSegmentPosition(Math.max(0, a.b.periods[jc(a.b, b.Ga)].startTime + b.ea.endTime - a.b.periods[e].startTime)) : b.stream.findSegmentPosition(Math.max(0, (d || c) - a.b.periods[e].startTime)), null == f ? d = null : (g = null, null == d && (g = Lf(a, b, e, Math.max(0, f - 1))), d = g || Lf(a, b, e, f)));
                        if (!d) return 1;
                        b.rc = 0;
                        Mf(a, b, c, e, d);
                        return null
                    }

                    function Lf(a, b, c, d) {
                        c = a.b.periods[c];
                        b = b.stream.getSegmentReference(d);
                        if (!b) return null;
                        a = a.b.presentationTimeline;
                        d = a.va();
                        return c.startTime + b.endTime < a.na() || c.startTime + b.startTime > d ? null : b
                    }

                    function Mf(a, b, c, d, e) {
                        var f = a.b.periods[d],
                            g = b.stream,
                            h = a.b.periods[d + 1],
                            l = null,
                            l = h ? h.startTime : a.b.presentationTimeline.Y();
                        d = Nf(a, b, d, l);
                        b.ya = !0;
                        b.eb = !1;
                        h = Of(a, e);
                        Promise.all([d, h]).then(function (a) {
                            if (!this.f && !this.l) return Pf(this, b, c, f, g, e, a[1])
                        }.bind(a)).then(function () {
                            this.f || this.l || (b.ya = !1, b.Gb = !1, b.sa || this.a.Ab(), Ff(this, b, 0), Qf(this, g))
                        }.bind(a))["catch"](function (a) {
                            this.f || this.l || (b.ya = !1, this.b.presentationTimeline.$() && this.g.infiniteRetriesForLiveStreams && (1001 == a.code || 1002 ==
                                a.code || 1003 == a.code) ? "text" == b.type && this.g.ignoreTextStreamFailures && 1001 == a.code ? delete this.c.text : (a.severity = 1, this.a.onError(a), Ff(this, b, 4)) : 3017 == a.code ? Rf(this, b, a) : "text" == b.type && this.g.ignoreTextStreamFailures ? delete this.c.text : (b.tb = !0, a.severity = 2, this.a.onError(a)))
                        }.bind(a))
                    }

                    function Rf(a, b, c) {
                        if (!Oa(a.c).some(function (a) {
                                return a != b && a.Gb
                            })) {
                            var d = Math.round(100 * a.i);
                            if (20 < d) a.i -= .2;
                            else if (4 < d) a.i -= .04;
                            else {
                                b.tb = !0;
                                a.l = !0;
                                a.a.onError(c);
                                return
                            }
                            b.Gb = !0
                        }
                        Ff(a, b, 4)
                    }

                    function Nf(a, b, c, d) {
                        if (!b.eb) return Promise.resolve();
                        c = Nb(a.a.K, b.type, a.b.periods[c].startTime - b.stream.presentationTimeOffset, d);
                        if (!b.stream.initSegmentReference) return c;
                        a = Of(a, b.stream.initSegmentReference).then(function (a) {
                            if (!this.f) return Kb(this.a.K, b.type, a, null, null)
                        }.bind(a))["catch"](function (a) {
                            b.eb = !0;
                            return Promise.reject(a)
                        });
                        return Promise.all([c, a])
                    }

                    function Pf(a, b, c, d, e, f, g) {
                        e.containsEmsgBoxes && (new O).da("emsg", a.Ed.bind(a, d, f)).parse(g);
                        return Sf(a, b, c).then(function () {
                            if (!this.f) return Kb(this.a.K, b.type, g, f.startTime + d.startTime, f.endTime + d.startTime)
                        }.bind(a)).then(function () {
                            if (!this.f) return b.Ga = e, b.ea = f, Promise.resolve()
                        }.bind(a))
                    }
                    k.Ed = function (a, b, c) {
                        var d = c.s.Db(),
                            e = c.s.Db(),
                            f = c.s.D(),
                            g = c.s.D(),
                            h = c.s.D(),
                            l = c.s.D();
                        c = c.s.La(c.s.H.byteLength - c.s.u);
                        a = a.startTime + b.startTime + g / f;
                        if ("urn:mpeg:dash:event:2012" == d) this.a.kd();
                        else this.a.onEvent(new G("emsg", {
                            detail: {
                                startTime: a,
                                endTime: a + h / f,
                                schemeIdUri: d,
                                value: e,
                                timescale: f,
                                presentationTimeDelta: g,
                                eventDuration: h,
                                id: l,
                                messageData: c
                            }
                        }))
                    };

                    function Sf(a, b, c) {
                        var d = Ib(a.a.K, b.type);
                        if (null == d) return Promise.resolve();
                        c = c - d - a.g.bufferBehind;
                        return 0 >= c ? Promise.resolve() : a.a.K.remove(b.type, d, d + c).then(function () {}.bind(a))
                    }

                    function Qf(a, b) {
                        if (!a.v && (a.v = Oa(a.c).every(function (a) {
                                return "text" == a.type ? !0 : !a.sa && !a.ta && a.ea
                            }), a.v)) {
                            var c = jc(a.b, b);
                            a.h[c] || If(a, c).then(function () {
                                this.a.ac()
                            }.bind(a))["catch"](y);
                            for (c = 0; c < a.b.periods.length; ++c) If(a, c)["catch"](y);
                            a.a.wd && a.a.wd()
                        }
                    }

                    function Kf(a, b) {
                        if (b.xa != jc(a.b, b.stream)) {
                            var c = b.xa,
                                d = Oa(a.c);
                            d.every(function (a) {
                                return a.xa == c
                            }) && d.every(Tf) && If(a, c).then(function () {
                                if (!this.f && d.every(function (a) {
                                        var b = jc(this.b, a.stream);
                                        return Tf(a) && a.xa == c && b != c
                                    }.bind(this))) {
                                    var a = this.b.periods[c],
                                        b = this.a.bc(a),
                                        g;
                                    for (g in this.c)
                                        if (!b[g] && "text" != g) {
                                            this.a.onError(new t(2, 5, 5005));
                                            return
                                        }
                                    for (g in b)
                                        if (!this.c[g])
                                            if ("text" == g) xf(this, {
                                                text: b.text
                                            }, a.startTime), delete b[g];
                                            else {
                                                this.a.onError(new t(2, 5, 5005));
                                                return
                                            }
                                    for (g in this.c)(a =
                                        b[g]) ? (Bf(this, g, a, !1), Ff(this, this.c[g], 0)) : delete this.c[g];
                                    this.a.ac()
                                }
                            }.bind(a))["catch"](y)
                        }
                    }

                    function Tf(a) {
                        return !a.ya && null == a.ra && !a.sa && !a.ta
                    }

                    function Of(a, b) {
                        var c = Ga(b.a(), a.g.retryParameters);
                        if (b.X || null != b.M) {
                            var d = "bytes=" + b.X + "-";
                            null != b.M && (d += b.M);
                            c.headers.Range = d
                        }
                        return a.a.dd.request(1, c).then(function (a) {
                            return a.data
                        })
                    }

                    function Df(a, b, c) {
                        b.sa = !1;
                        b.kb = !1;
                        b.ta = !0;
                        Mb(a.a.K, b.type).then(function () {
                            if (!this.f && c) {
                                var a = this.a.K,
                                    e = b.type;
                                return "text" == e ? Promise.resolve() : Lb(a, e, a.Oc.bind(a, e))
                            }
                        }.bind(a)).then(function () {
                            this.f || (b.Ga = null, b.ea = null, b.ta = !1, b.endOfStream = !1, Ff(this, b, 0))
                        }.bind(a))
                    }

                    function Ff(a, b, c) {
                        b.ra = window.setTimeout(a.le.bind(a, b), 1E3 * c)
                    }

                    function wf(a) {
                        null != a.ra && (window.clearTimeout(a.ra), a.ra = null)
                    };

                    function Uf(a, b) {
                        return new Promise(function (c, d) {
                            var e = new XMLHttpRequest;
                            e.open(b.method, a, !0);
                            e.responseType = "arraybuffer";
                            e.timeout = b.retryParameters.timeout;
                            e.withCredentials = b.allowCrossSiteCredentials;
                            e.onload = function (b) {
                                b = b.target;
                                var e = b.getAllResponseHeaders().split("\r\n").reduce(function (a, b) {
                                    var c = b.split(": ");
                                    a[c[0].toLowerCase()] = c.slice(1).join(": ");
                                    return a
                                }, {});
                                if (200 <= b.status && 299 >= b.status && 202 != b.status) b.responseURL && (a = b.responseURL), c({
                                    uri: a,
                                    data: b.response,
                                    headers: e,
                                    fromCache: !!e["x-shaka-from-cache"]
                                });
                                else {
                                    var f = null;
                                    try {
                                        f = Ua(b.response)
                                    } catch (m) {}
                                    d(new t(401 == b.status || 403 == b.status ? 2 : 1, 1, 1001, a, b.status, f, e))
                                }
                            };
                            e.onerror = function () {
                                d(new t(1, 1, 1002, a))
                            };
                            e.ontimeout = function () {
                                d(new t(1, 1, 1003, a))
                            };
                            for (var f in b.headers) e.setRequestHeader(f, b.headers[f]);
                            e.send(b.body)
                        })
                    }
                    n("shaka.net.HttpPlugin", Uf);
                    Ea.http = Uf;
                    Ea.https = Uf;

                    function Vf() {
                        this.a = null;
                        this.b = [];
                        this.c = {}
                    }
                    k = Vf.prototype;
                    k.init = function (a, b) {
                        return Wf(this, a, b).then(function () {
                            var b = Object.keys(a);
                            return Promise.all(b.map(function (a) {
                                return Xf(this, a).then(function (b) {
                                    this.c[a] = b
                                }.bind(this))
                            }.bind(this)))
                        }.bind(this))
                    };
                    k.m = function () {
                        return Promise.all(this.b.map(function (a) {
                            try {
                                a.transaction.abort()
                            } catch (b) {}
                            return a.L["catch"](y)
                        })).then(function () {
                            this.a && (this.a.close(), this.a = null)
                        }.bind(this))
                    };
                    k.get = function (a, b) {
                        var c;
                        return Yf(this, a, "readonly", function (a) {
                            c = a.get(b)
                        }).then(function () {
                            return c.result
                        })
                    };
                    k.forEach = function (a, b) {
                        return Yf(this, a, "readonly", function (a) {
                            a.openCursor().onsuccess = function (a) {
                                if (a = a.target.result) b(a.value), a["continue"]()
                            }
                        })
                    };

                    function Zf(a, b, c) {
                        return Yf(a, b, "readwrite", function (a) {
                            a.put(c)
                        })
                    }
                    k.remove = function (a, b) {
                        return Yf(this, a, "readwrite", function (a) {
                            a["delete"](b)
                        })
                    };

                    function $f(a, b, c) {
                        return Yf(a, "segment", "readwrite", function (a) {
                            for (var d = 0; d < b.length; d++) a["delete"](b[d]).onsuccess = c || function () {}
                        })
                    }

                    function Xf(a, b) {
                        var c = 0;
                        return Yf(a, b, "readonly", function (a) {
                            a.openCursor(null, "prev").onsuccess = function (a) {
                                (a = a.target.result) && (c = a.key + 1)
                            }
                        }).then(function () {
                            return c
                        })
                    }

                    function Yf(a, b, c, d) {
                        var e = {
                            transaction: a.a.transaction([b], c),
                            L: new A
                        };
                        e.transaction.oncomplete = function () {
                            this.b.splice(this.b.indexOf(e), 1);
                            e.L.resolve()
                        }.bind(a);
                        e.transaction.onabort = function (a) {
                            this.b.splice(this.b.indexOf(e), 1);
                            ag(e.transaction, e.L, a)
                        }.bind(a);
                        e.transaction.onerror = function (a) {
                            a.preventDefault()
                        }.bind(a);
                        b = e.transaction.objectStore(b);
                        d(b);
                        a.b.push(e);
                        return e.L
                    }

                    function Wf(a, b, c) {
                        var d = window.indexedDB.open("shaka_offline_db", 1),
                            e = !1,
                            f = new A;
                        d.onupgradeneeded = function (a) {
                            e = !0;
                            a = a.target.result;
                            for (var c in b) a.createObjectStore(c, {
                                keyPath: b[c]
                            })
                        };
                        d.onsuccess = function (a) {
                            c && !e ? (a.target.result.close(), setTimeout(function () {
                                Wf(this, b, c - 1).then(f.resolve, f.reject)
                            }.bind(this), 1E3)) : (this.a = a.target.result, f.resolve())
                        }.bind(a);
                        d.onerror = ag.bind(null, d, f);
                        return f
                    }

                    function ag(a, b, c) {
                        a.error ? b.reject(new t(2, 9, 9001, a.error)) : b.reject(new t(2, 9, 9002));
                        c.preventDefault()
                    };
                    var bg = {
                        manifest: "key",
                        segment: "key"
                    };

                    function cg(a) {
                        var b = dg(a.periods[0], [], new R(null, 0)),
                            c = $b(b, null, null),
                            b = bc(b, null);
                        c.push.apply(c, b);
                        return {
                            offlineUri: "offline:" + a.key,
                            originalManifestUri: a.originalManifestUri,
                            duration: a.duration,
                            size: a.size,
                            expiration: void 0 == a.expiration ? Infinity : a.expiration,
                            tracks: c,
                            appMetadata: a.appMetadata
                        }
                    }

                    function dg(a, b, c) {
                        var d = a.streams.filter(function (a) {
                                return "text" == a.contentType
                            }),
                            e = a.streams.filter(function (a) {
                                return "audio" == a.contentType
                            }),
                            f = a.streams.filter(function (a) {
                                return "video" == a.contentType
                            });
                        b = eg(e, f, b);
                        d = d.map(fg);
                        a.streams.forEach(function (a) {
                            a = gg(a);
                            c.Ia(0, a)
                        });
                        return {
                            startTime: a.startTime,
                            variants: b,
                            textStreams: d
                        }
                    }

                    function gg(a) {
                        return a.segments.map(function (a, c) {
                            return new M(c, a.startTime, a.endTime, function () {
                                return [a.uri]
                            }, 0, null)
                        })
                    }

                    function eg(a, b, c) {
                        var d = [];
                        if (!a.length && !b.length) return d;
                        a.length ? b.length || (b = [null]) : a = [null];
                        for (var e = 0, f = 0; f < a.length; f++)
                            for (var g = 0; g < b.length; g++)
                                if (hg(a[f], b[g])) {
                                    var h = a[f];
                                    var l = b[g],
                                        m = c;
                                    h = {
                                        id: e++,
                                        language: h ? h.language : "",
                                        primary: !!h && h.primary || !!l && l.primary,
                                        audio: fg(h),
                                        video: fg(l),
                                        bandwidth: 0,
                                        drmInfos: m,
                                        allowedByApplication: !0,
                                        allowedByKeySystem: !0
                                    };
                                    d.push(h)
                                }
                        return d
                    }

                    function hg(a, b) {
                        if (!(a && b && a.variantIds && b.variantIds)) return !0;
                        for (var c = 0; c < a.variantIds.length; c++)
                            if (b.variantIds.some(function (b) {
                                    return b == a.variantIds[c]
                                })) return !0;
                        return !1
                    }

                    function fg(a) {
                        if (!a) return null;
                        var b = gg(a),
                            b = new Q(b);
                        return {
                            id: a.id,
                            createSegmentIndex: Promise.resolve.bind(Promise),
                            findSegmentPosition: b.find.bind(b),
                            getSegmentReference: b.get.bind(b),
                            initSegmentReference: a.initSegmentUri ? new bd(function () {
                                return [a.initSegmentUri]
                            }, 0, null) : null,
                            presentationTimeOffset: a.presentationTimeOffset,
                            mimeType: a.mimeType,
                            codecs: a.codecs,
                            width: a.width || void 0,
                            height: a.height || void 0,
                            frameRate: a.frameRate || void 0,
                            kind: a.kind,
                            encrypted: a.encrypted,
                            keyId: a.keyId,
                            language: a.language,
                            label: a.label || null,
                            type: a.contentType,
                            primary: a.primary,
                            trickModeVideo: null,
                            containsEmsgBoxes: !1,
                            roles: []
                        }
                    }

                    function ig() {
                        return window.indexedDB ? new Vf : null
                    };

                    function jg(a, b, c, d) {
                        this.b = {};
                        this.l = [];
                        this.o = d;
                        this.j = a;
                        this.v = b;
                        this.A = c;
                        this.i = this.a = null;
                        this.f = this.g = this.h = this.c = 0
                    }
                    jg.prototype.m = function () {
                        var a = this.j,
                            b = this.l,
                            c = this.i || Promise.resolve();
                        b.length && (c = c.then(function () {
                            return $f(a, b)
                        }));
                        this.b = {};
                        this.l = [];
                        this.i = this.a = this.A = this.v = this.j = this.o = null;
                        return c
                    };

                    function kg(a, b, c, d, e) {
                        a.b[b] = a.b[b] || [];
                        a.b[b].push({
                            uris: c.a(),
                            X: c.X,
                            M: c.M,
                            Rb: d,
                            Hb: e
                        })
                    }

                    function lg(a, b) {
                        a.c = 0;
                        a.h = 0;
                        a.g = 0;
                        a.f = 0;
                        Oa(a.b).forEach(function (a) {
                            a.forEach(function (a) {
                                null != a.M ? this.c += a.M - a.X + 1 : this.g += a.Rb
                            }.bind(this))
                        }.bind(a));
                        a.a = b;
                        a.a.size = a.c;
                        var c = Oa(a.b).map(function (a) {
                            var b = 0,
                                c = function () {
                                    if (!this.o) return Promise.reject(new t(2, 9, 9002));
                                    if (b >= a.length) return Promise.resolve();
                                    var d = a[b++];
                                    return mg(this, d).then(c)
                                }.bind(this);
                            return c()
                        }.bind(a));
                        a.b = {};
                        a.i = Promise.all(c).then(function () {
                            return Zf(this.j, "manifest", b)
                        }.bind(a)).then(function () {
                            this.l = []
                        }.bind(a));
                        return a.i
                    }

                    function mg(a, b) {
                        var c = Ga(b.uris, a.A);
                        if (b.X || null != b.M) c.headers.Range = "bytes=" + b.X + "-" + (null == b.M ? "" : b.M);
                        var d;
                        return a.v.request(1, c).then(function (a) {
                            if (!this.a) return Promise.reject(new t(2, 9, 9002));
                            d = a.data.byteLength;
                            this.l.push(b.Hb.key);
                            b.Hb.data = a.data;
                            return Zf(this.j, "segment", b.Hb)
                        }.bind(a)).then(function () {
                            if (!this.a) return Promise.reject(new t(2, 9, 9002));
                            null == b.M ? (this.a.size += d, this.f += b.Rb) : this.h += d;
                            var a = (this.h + this.f) / (this.c + this.g),
                                c = cg(this.a);
                            this.o.progressCallback(c, a)
                        }.bind(a))
                    };

                    function ng() {
                        this.a = -1
                    }
                    k = ng.prototype;
                    k.configure = function () {};
                    k.start = function (a) {
                        var b = /^offline:([0-9]+)$/.exec(a);
                        if (!b) return Promise.reject(new t(2, 1, 9004, a));
                        var c = Number(b[1]),
                            d = ig();
                        this.a = c;
                        return d ? d.init(bg).then(function () {
                            return d.get("manifest", c)
                        }).then(function (a) {
                            if (!a) throw new t(2, 9, 9003, c);
                            return og(a)
                        }).then(function (a) {
                            return d.m().then(function () {
                                return a
                            })
                        }, function (a) {
                            return d.m().then(function () {
                                throw a;
                            })
                        }) : Promise.reject(new t(2, 9, 9E3))
                    };
                    k.stop = function () {
                        return Promise.resolve()
                    };
                    k.update = function () {};
                    k.onExpirationUpdated = function (a, b) {
                        var c = ig();
                        c.init(bg).then(function () {
                            return c.get("manifest", this.a)
                        }.bind(this)).then(function (d) {
                            if (d && !(0 > d.sessionIds.indexOf(a)) && (void 0 == d.expiration || d.expiration > b)) return d.expiration = b, Zf(c, "manifest", d)
                        })["catch"](function () {}).then(function () {
                            return c.m()
                        })
                    };

                    function og(a) {
                        var b = new R(null, 0);
                        b.qa(a.duration);
                        var c = a.drmInfo ? [a.drmInfo] : [];
                        return {
                            presentationTimeline: b,
                            minBufferTime: 10,
                            offlineSessionIds: a.sessionIds,
                            periods: a.periods.map(function (a) {
                                return dg(a, c, b)
                            })
                        }
                    }
                    Gd["application/x-offline-manifest"] = ng;

                    function pg(a) {
                        if (/^offline:([0-9]+)$/.exec(a)) {
                            var b = {
                                uri: a,
                                data: new ArrayBuffer(0),
                                headers: {
                                    "content-type": "application/x-offline-manifest"
                                }
                            };
                            return Promise.resolve(b)
                        }
                        if (b = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a)) {
                            var c = Number(b[1]),
                                d = ig();
                            return d ? d.init(bg).then(function () {
                                return d.get("segment", c)
                            }).then(function (b) {
                                return d.m().then(function () {
                                    if (!b) throw new t(2, 9, 9003, c);
                                    return {
                                        uri: a,
                                        data: b.data,
                                        headers: {}
                                    }
                                })
                            }) : Promise.reject(new t(2, 9, 9E3))
                        }
                        return Promise.reject(new t(2, 1, 9004, a))
                    }
                    n("shaka.offline.OfflineScheme", pg);
                    Ea.offline = pg;

                    function qg() {
                        this.a = Promise.resolve();
                        this.b = this.c = this.f = !1;
                        this.i = new Promise(function (a) {
                            this.g = a
                        }.bind(this))
                    }
                    qg.prototype.then = function (a) {
                        this.a = this.a.then(a).then(function (a) {
                            return this.b ? (this.g(), Promise.reject(this.h)) : Promise.resolve(a)
                        }.bind(this));
                        return this
                    };

                    function rg(a) {
                        a.f || (a.a = a.a.then(function (a) {
                            this.c = !0;
                            return Promise.resolve(a)
                        }.bind(a), function (a) {
                            this.c = !0;
                            return this.b ? (this.g(), Promise.reject(this.h)) : Promise.reject(a)
                        }.bind(a)));
                        a.f = !0;
                        return a.a
                    }
                    qg.prototype.cancel = function (a) {
                        if (this.c) return Promise.resolve();
                        this.b = !0;
                        this.h = a;
                        return this.i
                    };

                    function U(a, b) {
                        p.call(this);
                        this.O = !1;
                        this.f = a;
                        this.A = null;
                        this.l = new C;
                        this.Qb = new F;
                        this.Za = this.c = this.h = this.a = this.v = this.g = this.Xa = this.ka = this.N = this.j = this.o = null;
                        this.Dc = 1E9;
                        this.Wa = [];
                        this.la = !1;
                        this.$a = !0;
                        this.ma = this.J = null;
                        this.G = {};
                        this.Ya = [];
                        this.B = {};
                        this.b = sg(this);
                        this.ob = {
                            width: Infinity,
                            height: Infinity
                        };
                        this.i = tg();
                        this.Va = 0;
                        this.ja = this.b.preferredAudioLanguage;
                        this.Da = this.b.preferredTextLanguage;
                        this.lb = this.mb = "";
                        b && b(this);
                        this.o = new B(this.ee.bind(this));
                        this.Xa = ug(this);
                        for (var c = 0; c < this.f.textTracks.length; ++c) {
                            var d = this.f.textTracks[c];
                            d.mode = "disabled";
                            "Shaka Player TextTrack" == d.label && (this.A = d)
                        }
                        this.A || (this.A = this.f.addTextTrack("subtitles", "Shaka Player TextTrack"));
                        this.A.mode = "hidden";
                        D(this.l, this.f, "error", this.yd.bind(this))
                    }
                    ba(U);
                    n("shaka.Player", U);
                    U.prototype.m = function () {
                        this.O = !0;
                        var a = Promise.resolve();
                        this.J && (a = this.J.cancel(new t(2, 7, 7E3)));
                        return a.then(function () {
                            var a = Promise.all([this.ma, vg(this), this.l ? this.l.m() : null, this.o ? this.o.m() : null]);
                            this.b = this.o = this.Qb = this.l = this.A = this.f = null;
                            return a
                        }.bind(this))
                    };
                    U.prototype.destroy = U.prototype.m;
                    U.version = "v2.1.5";
                    var wg = {};
                    U.registerSupportPlugin = function (a, b) {
                        wg[a] = b
                    };
                    U.isBrowserSupported = function () {
                        return !!window.Promise && !!window.Uint8Array && !!Array.prototype.forEach && !!window.MediaSource && !!window.MediaSource.isTypeSupported && !!window.MediaKeys && !!window.navigator && !!window.navigator.requestMediaKeySystemAccess && !!window.MediaKeySystemAccess && !!window.MediaKeySystemAccess.prototype.getConfiguration
                    };
                    U.probeSupport = function () {
                        return rb().then(function (a) {
                            var b = Id(),
                                c = Fb();
                            a = {
                                manifest: b,
                                media: c,
                                drm: a
                            };
                            for (var d in wg) a[d] = wg[d]();
                            return a
                        })
                    };
                    U.prototype.load = function (a, b, c) {
                        var d = this.ib(),
                            e = new qg;
                        this.J = e;
                        this.dispatchEvent(new G("loading"));
                        var f = Date.now();
                        return rg(e.then(function () {
                            return d
                        }).then(function () {
                            this.i = tg();
                            D(this.l, this.f, "playing", this.Ta.bind(this));
                            D(this.l, this.f, "pause", this.Ta.bind(this));
                            D(this.l, this.f, "ended", this.Ta.bind(this));
                            return Jd(a, this.o, this.b.manifest.retryParameters, c)
                        }.bind(this)).then(function (b) {
                            this.h = new b;
                            this.h.configure(this.b.manifest);
                            b = {
                                networkingEngine: this.o,
                                filterPeriod: this.gb.bind(this),
                                onTimelineRegionAdded: this.xd.bind(this),
                                onEvent: this.hb.bind(this),
                                onError: this.za.bind(this)
                            };
                            return 2 < this.h.start.length ? this.h.start(a, this.o, b.filterPeriod, b.onError, b.onEvent) : this.h.start(a, b)
                        }.bind(this)).then(function (b) {
                            b.periods.some(function (a) {
                                return a.variants.some(function (a) {
                                    return a.video && a.audio
                                })
                            }) && b.periods.forEach(function (a) {
                                a.variants = a.variants.filter(function (a) {
                                    return a.video && a.audio
                                })
                            });
                            if (0 == b.periods.length) throw new t(2, 4, 4014);
                            this.c = b;
                            this.Za = a;
                            this.j = new cb(this.o,
                                this.za.bind(this), this.ce.bind(this), this.be.bind(this));
                            this.j.configure(this.b.drm);
                            return this.j.init(b, !1)
                        }.bind(this)).then(function () {
                            this.c.periods.forEach(this.gb.bind(this));
                            this.Va = Date.now() / 1E3;
                            this.ja = this.b.preferredAudioLanguage;
                            this.Da = this.b.preferredTextLanguage;
                            return Promise.all([fb(this.j, this.f), this.Xa])
                        }.bind(this)).then(function () {
                            this.b.abr.manager.init(this.Lb.bind(this));
                            this.g = new jf(this.f, this.c, this.b.streaming, b || null, this.de.bind(this), this.hb.bind(this));
                            this.v =
                                new rf(this.f, this.c, this.b.streaming, this.zc.bind(this), this.hb.bind(this), this.ae.bind(this));
                            this.ka = new Eb(this.f, this.N, this.A);
                            this.a = new vf(this.c, {
                                Pa: this.g,
                                K: this.ka,
                                dd: this.o,
                                bc: this.ed.bind(this),
                                ac: this.Gc.bind(this),
                                onError: this.za.bind(this),
                                onEvent: this.hb.bind(this),
                                kd: this.ld.bind(this),
                                Ab: this.ud.bind(this)
                            });
                            this.a.configure(this.b.streaming);
                            xg(this);
                            return this.a.init()
                        }.bind(this)).then(function () {
                            if (this.b.streaming.startAtSegmentBoundary) {
                                var a = yg(this, mf(this.g));
                                kf(this.g,
                                    a)
                            }
                            this.c.periods.forEach(this.gb.bind(this));
                            zg(this);
                            Ag(this);
                            var a = T(this.a),
                                b = ec(a, this.ja);
                            this.b.abr.manager.setVariants(b);
                            a.variants.some(function (a) {
                                return a.primary
                            });
                            this.Ya.forEach(this.v.v.bind(this.v));
                            this.Ya = [];
                            Ma(this.l, this.f, "loadeddata", function () {
                                this.i.loadLatency = (Date.now() - f) / 1E3
                            }.bind(this));
                            this.J = null
                        }.bind(this)))["catch"](function (a) {
                            this.J == e && (this.J = null, this.dispatchEvent(new G("unloading")));
                            return Promise.reject(a)
                        }.bind(this))
                    };
                    U.prototype.load = U.prototype.load;

                    function xg(a) {
                        function b(a) {
                            return (a.video ? a.video.codecs.split(".")[0] : "") + "-" + (a.audio ? a.audio.codecs.split(".")[0] : "")
                        }
                        var c = {};
                        a.c.periods.forEach(function (a) {
                            a.variants.forEach(function (a) {
                                var d = b(a);
                                d in c || (c[d] = []);
                                c[d].push(a)
                            })
                        });
                        var d = null,
                            e = Infinity;
                        Ra(c, function (a, b) {
                            var c = 0,
                                f = 0;
                            b.forEach(function (a) {
                                c += a.bandwidth;
                                ++f
                            });
                            var g = c / f;
                            g < e && (d = a, e = g)
                        });
                        a.c.periods.forEach(function (a) {
                            a.variants = a.variants.filter(function (a) {
                                return b(a) == d ? !0 : !1
                            })
                        })
                    }

                    function ug(a) {
                        a.N = new MediaSource;
                        var b = new A;
                        D(a.l, a.N, "sourceopen", b.resolve);
                        a.f.src = window.URL.createObjectURL(a.N);
                        return b
                    }
                    U.prototype.configure = function (a) {
                        a.abr && a.abr.manager && a.abr.manager != this.b.abr.manager && (this.b.abr.manager.stop(), a.abr.manager.init(this.Lb.bind(this)));
                        Ca(this.b, a, sg(this), Bg(), "");
                        Cg(this)
                    };
                    U.prototype.configure = U.prototype.configure;

                    function Cg(a) {
                        a.h && a.h.configure(a.b.manifest);
                        a.j && a.j.configure(a.b.drm);
                        if (a.a) {
                            a.a.configure(a.b.streaming);
                            try {
                                a.c.periods.forEach(a.gb.bind(a))
                            } catch (b) {
                                a.za(b)
                            }
                            Dg(a, T(a.a))
                        }
                        a.b.abr.enabled && !a.$a ? a.b.abr.manager.enable() : a.b.abr.manager.disable();
                        a.b.abr.manager.setDefaultEstimate(a.b.abr.defaultBandwidthEstimate);
                        a.b.abr.manager.setRestrictions(a.b.abr.restrictions)
                    }
                    U.prototype.getConfiguration = function () {
                        var a = sg(this);
                        Ca(a, this.b, sg(this), Bg(), "");
                        return a
                    };
                    U.prototype.getConfiguration = U.prototype.getConfiguration;
                    U.prototype.Sd = function () {
                        var a = sg(this);
                        a.abr && a.abr.manager && a.abr.manager != this.b.abr.manager && (this.b.abr.manager.stop(), a.abr.manager.init(this.Lb.bind(this)));
                        this.b = sg(this);
                        Cg(this)
                    };
                    U.prototype.resetConfiguration = U.prototype.Sd;
                    U.prototype.Sc = function () {
                        return this.f
                    };
                    U.prototype.getMediaElement = U.prototype.Sc;
                    U.prototype.Wb = function () {
                        return this.o
                    };
                    U.prototype.getNetworkingEngine = U.prototype.Wb;
                    U.prototype.Rc = function () {
                        return this.Za
                    };
                    U.prototype.getManifestUri = U.prototype.Rc;
                    U.prototype.$ = function () {
                        return this.c ? this.c.presentationTimeline.$() : !1
                    };
                    U.prototype.isLive = U.prototype.$;
                    U.prototype.wa = function () {
                        return this.c ? this.c.presentationTimeline.wa() : !1
                    };
                    U.prototype.isInProgress = U.prototype.wa;
                    U.prototype.Ud = function () {
                        var a = 0,
                            b = 0;
                        this.c && (b = this.c.presentationTimeline, a = b.na(), b = b.cb());
                        return {
                            start: a,
                            end: b
                        }
                    };
                    U.prototype.seekRange = U.prototype.Ud;
                    U.prototype.keySystem = function () {
                        return this.j ? this.j.keySystem() : ""
                    };
                    U.prototype.keySystem = U.prototype.keySystem;
                    U.prototype.drmInfo = function () {
                        return this.j ? this.j.b : null
                    };
                    U.prototype.drmInfo = U.prototype.drmInfo;
                    U.prototype.bb = function () {
                        return this.j ? this.j.bb() : Infinity
                    };
                    U.prototype.getExpiration = U.prototype.bb;
                    U.prototype.$c = function () {
                        return this.la
                    };
                    U.prototype.isBuffering = U.prototype.$c;
                    U.prototype.ib = function () {
                        if (this.O) return Promise.resolve();
                        this.dispatchEvent(new G("unloading"));
                        var a = Promise.resolve();
                        this.J && (a = this.J.cancel(new t(2, 7, 7E3)));
                        return a.then(function () {
                            this.ma || (this.ma = Eg(this).then(function () {
                                this.ma = null
                            }.bind(this)));
                            return this.ma
                        }.bind(this))
                    };
                    U.prototype.unload = U.prototype.ib;
                    U.prototype.rb = function () {
                        return this.g ? this.g.rb() : 0
                    };
                    U.prototype.getPlaybackRate = U.prototype.rb;
                    U.prototype.oe = function (a) {
                        this.g && of (this.g, a);
                        this.a && Af(this.a, 1 != a)
                    };
                    U.prototype.trickPlay = U.prototype.oe;
                    U.prototype.Hc = function () {
                        this.g && of (this.g, 1);
                        this.a && Af(this.a, !1)
                    };
                    U.prototype.cancelTrickPlay = U.prototype.Hc;
                    U.prototype.getTracks = function () {
                        return this.Yb().concat(this.Xb())
                    };
                    U.prototype.getTracks = U.prototype.getTracks;
                    U.prototype.Xd = function (a, b) {
                        "text" == a.type ? this.tc(a) : (this.configure({
                            abr: {
                                enabled: !1
                            }
                        }), this.uc(a, b))
                    };
                    U.prototype.selectTrack = U.prototype.Xd;
                    U.prototype.Yb = function () {
                        if (!this.c) return [];
                        var a = ic(this.c, mf(this.g)),
                            b = this.B[a] || {};
                        return $b(this.c.periods[a], b.audio, b.video)
                    };
                    U.prototype.getVariantTracks = U.prototype.Yb;
                    U.prototype.Xb = function () {
                        if (!this.c) return [];
                        var a = ic(this.c, mf(this.g));
                        return bc(this.c.periods[a], (this.B[a] || {}).text).filter(function (a) {
                            return 0 > this.Wa.indexOf(a.id)
                        }.bind(this))
                    };
                    U.prototype.getTextTracks = U.prototype.Xb;
                    U.prototype.tc = function (a) {
                        if (this.a && (a = dc(T(this.a), a))) {
                            Fg(this, a, !1);
                            var b = {};
                            b.text = a;
                            Gg(this, b, !0)
                        }
                    };
                    U.prototype.selectTextTrack = U.prototype.tc;
                    U.prototype.uc = function (a, b) {
                        if (this.a) {
                            var c = {},
                                d = cc(T(this.a), a),
                                e = yf(this.a);
                            if (d) {
                                if (!d.allowedByApplication || !d.allowedByKeySystem) return;
                                d.audio && (Hg(this, d.audio), d.audio != e.audio && (c.audio = d.audio));
                                d.video && (Hg(this, d.video), d.video != e.video && (c.video = d.video))
                            }
                            Oa(c).forEach(function (a) {
                                Fg(this, a, !1)
                            }.bind(this));
                            (d = e.text) && (c.text = d);
                            Gg(this, c, b)
                        }
                    };
                    U.prototype.selectVariantTrack = U.prototype.uc;
                    U.prototype.Pc = function () {
                        return this.a ? ac(T(this.a).variants).map(function (a) {
                            return a.language
                        }).filter(za) : []
                    };
                    U.prototype.getAudioLanguages = U.prototype.Pc;
                    U.prototype.Yc = function () {
                        return this.a ? T(this.a).textStreams.map(function (a) {
                            return a.language
                        }).filter(za) : []
                    };
                    U.prototype.getTextLanguages = U.prototype.Yc;
                    U.prototype.Vd = function (a, b) {
                        if (this.a) {
                            var c = T(this.a);
                            this.ja = a;
                            this.mb = b || "";
                            Dg(this, c)
                        }
                    };
                    U.prototype.selectAudioLanguage = U.prototype.Vd;
                    U.prototype.Wd = function (a, b) {
                        if (this.a) {
                            var c = T(this.a);
                            this.Da = a;
                            this.lb = b || "";
                            Dg(this, c)
                        }
                    };
                    U.prototype.selectTextLanguage = U.prototype.Wd;
                    U.prototype.bd = function () {
                        return "showing" == this.A.mode
                    };
                    U.prototype.isTextTrackVisible = U.prototype.bd;
                    U.prototype.Zd = function (a) {
                        this.A.mode = a ? "showing" : "hidden";
                        Ig(this)
                    };
                    U.prototype.setTextTrackVisibility = U.prototype.Zd;
                    U.prototype.Uc = function () {
                        return this.c ? new Date(1E3 * this.c.presentationTimeline.f + 1E3 * this.f.currentTime) : null
                    };
                    U.prototype.getPlayheadTimeAsDate = U.prototype.Uc;
                    U.prototype.getStats = function () {
                        Jg(this);
                        this.Ta();
                        var a = null,
                            b = null,
                            c = this.f && this.f.getVideoPlaybackQuality ? this.f.getVideoPlaybackQuality() : {};
                        this.g && this.c && (a = ic(this.c, mf(this.g)), b = this.B[a], b = hc(b.audio, b.video, this.c.periods[a].variants), a = b.video || {});
                        a || (a = {});
                        b || (b = {});
                        return {
                            width: a.width || 0,
                            height: a.height || 0,
                            streamBandwidth: b.bandwidth || 0,
                            decodedFrames: Number(c.totalVideoFrames),
                            droppedFrames: Number(c.droppedVideoFrames),
                            estimatedBandwidth: this.b.abr.manager.getBandwidthEstimate(),
                            loadLatency: this.i.loadLatency,
                            playTime: this.i.playTime,
                            bufferingTime: this.i.bufferingTime,
                            switchHistory: Da(this.i.switchHistory),
                            stateHistory: Da(this.i.stateHistory)
                        }
                    };
                    U.prototype.getStats = U.prototype.getStats;
                    U.prototype.addTextTrack = function (a, b, c, d, e, f) {
                        if (!this.a) return Promise.reject();
                        for (var g = T(this.a), h, l = 0; l < this.c.periods.length; l++)
                            if (this.c.periods[l] == g) {
                                if (l == this.c.periods.length - 1) {
                                    if (h = this.c.presentationTimeline.Y() - g.startTime, Infinity == h) return Promise.reject()
                                } else h = this.c.periods[l + 1].startTime - g.startTime;
                                break
                            }
                        var m = {
                            id: this.Dc++,
                            createSegmentIndex: Promise.resolve.bind(Promise),
                            findSegmentPosition: function () {
                                return 1
                            },
                            getSegmentReference: function (b) {
                                return 1 != b ? null : new M(1, 0,
                                    h,
                                    function () {
                                        return [a]
                                    }, 0, null)
                            },
                            initSegmentReference: null,
                            presentationTimeOffset: 0,
                            mimeType: d,
                            codecs: e || "",
                            kind: c,
                            encrypted: !1,
                            keyId: null,
                            language: b,
                            label: f || null,
                            type: "text",
                            primary: !1,
                            trickModeVideo: null,
                            containsEmsgBoxes: !1,
                            roles: []
                        };
                        this.Wa.push(m.id);
                        g.textStreams.push(m);
                        return zf(this.a, m).then(function () {
                            if (!this.O) {
                                var a = this.c.periods.indexOf(g),
                                    d = yf(this.a);
                                d.text && (this.B[a].text = d.text.id);
                                this.Wa.splice(this.Wa.indexOf(m.id), 1);
                                Dg(this, g);
                                zg(this);
                                return {
                                    id: m.id,
                                    active: !1,
                                    type: "text",
                                    bandwidth: 0,
                                    language: b,
                                    label: f || null,
                                    kind: c,
                                    width: null,
                                    height: null
                                }
                            }
                        }.bind(this))
                    };
                    U.prototype.addTextTrack = U.prototype.addTextTrack;
                    U.prototype.Jb = function (a, b) {
                        this.ob.width = a;
                        this.ob.height = b
                    };
                    U.prototype.setMaxHardwareResolution = U.prototype.Jb;

                    function Fg(a, b, c) {
                        a.i.switchHistory.push({
                            timestamp: Date.now() / 1E3,
                            id: b.id,
                            type: b.type,
                            fromAdaptation: c
                        });
                        Hg(a, b)
                    }

                    function Hg(a, b) {
                        var c = jc(a.c, b);
                        a.B[c] || (a.B[c] = {});
                        a.B[c][b.type] = b.id
                    }

                    function vg(a) {
                        a.l && (a.l.ha(a.N, "sourceopen"), a.l.ha(a.f, "loadeddata"), a.l.ha(a.f, "playing"), a.l.ha(a.f, "pause"), a.l.ha(a.f, "ended"));
                        a.f && (a.f.removeAttribute("src"), a.f.load());
                        var b = Promise.all([a.b ? a.b.abr.manager.stop() : null, a.j ? a.j.m() : null, a.ka ? a.ka.m() : null, a.g ? a.g.m() : null, a.v ? a.v.m() : null, a.a ? a.a.m() : null, a.h ? a.h.stop() : null]);
                        a.j = null;
                        a.ka = null;
                        a.g = null;
                        a.v = null;
                        a.a = null;
                        a.h = null;
                        a.c = null;
                        a.Za = null;
                        a.Xa = null;
                        a.N = null;
                        a.Ya = [];
                        a.B = {};
                        a.G = {};
                        a.i = tg();
                        return b
                    }

                    function Eg(a) {
                        return a.h ? vg(a).then(function () {
                            this.O || (this.zc(!1), this.Xa = ug(this))
                        }.bind(a)) : Promise.resolve()
                    }

                    function Bg() {
                        return {
                            ".drm.servers": "",
                            ".drm.clearKeys": "",
                            ".drm.advanced": {
                                distinctiveIdentifierRequired: !1,
                                persistentStateRequired: !1,
                                videoRobustness: "",
                                audioRobustness: "",
                                serverCertificate: null
                            }
                        }
                    }

                    function sg(a) {
                        return {
                            drm: {
                                retryParameters: Fa(),
                                servers: {},
                                clearKeys: {},
                                advanced: {},
                                delayLicenseRequestUntilPlayed: !1
                            },
                            manifest: {
                                retryParameters: Fa(),
                                dash: {
                                    customScheme: function (a) {
                                        if (a) return null
                                    },
                                    clockSyncUri: "",
                                    ignoreDrmInfo: !1
                                },
                                hls: {
                                    defaultTimeOffset: 0
                                }
                            },
                            streaming: {
                                retryParameters: Fa(),
                                infiniteRetriesForLiveStreams: !0,
                                rebufferingGoal: 2,
                                bufferingGoal: 10,
                                bufferBehind: 30,
                                ignoreTextStreamFailures: !1,
                                startAtSegmentBoundary: !1,
                                smallGapLimit: .5,
                                jumpLargeGaps: !1
                            },
                            abr: {
                                manager: a.Qb,
                                enabled: !0,
                                defaultBandwidthEstimate: 5E5,
                                restrictions: {
                                    minWidth: 0,
                                    maxWidth: Infinity,
                                    minHeight: 0,
                                    maxHeight: Infinity,
                                    minPixels: 0,
                                    maxPixels: Infinity,
                                    minBandwidth: 0,
                                    maxBandwidth: Infinity
                                }
                            },
                            preferredAudioLanguage: "",
                            preferredTextLanguage: "",
                            restrictions: {
                                minWidth: 0,
                                maxWidth: Infinity,
                                minHeight: 0,
                                maxHeight: Infinity,
                                minPixels: 0,
                                maxPixels: Infinity,
                                minBandwidth: 0,
                                maxBandwidth: Infinity
                            }
                        }
                    }

                    function tg() {
                        return {
                            width: NaN,
                            height: NaN,
                            streamBandwidth: NaN,
                            decodedFrames: NaN,
                            droppedFrames: NaN,
                            estimatedBandwidth: NaN,
                            loadLatency: NaN,
                            playTime: 0,
                            bufferingTime: 0,
                            switchHistory: [],
                            stateHistory: []
                        }
                    }
                    k = U.prototype;
                    k.gb = function (a) {
                        var b = this.a ? yf(this.a) : {};
                        Xb(this.j, b, a);
                        b = 0 < ac(a.variants).length;
                        Wb(a, this.b.restrictions, this.ob) && this.a && T(this.a) == a && zg(this);
                        a = 1 > ac(a.variants).length;
                        if (!b) throw new t(2, 4, 4011);
                        if (a) throw new t(2, 4, 4012);
                    };

                    function Gg(a, b, c) {
                        for (var d in b) {
                            var e = b[d],
                                f = c || !1;
                            "text" == d && (f = !0);
                            a.$a ? a.G[d] = {
                                stream: e,
                                Kc: f
                            } : Bf(a.a, d, e, f)
                        }
                    }

                    function Jg(a) {
                        if (a.c) {
                            var b = Date.now() / 1E3;
                            a.la ? a.i.bufferingTime += b - a.Va : a.i.playTime += b - a.Va;
                            a.Va = b
                        }
                    }

                    function yg(a, b) {
                        function c(a, b) {
                            if (!a) return null;
                            var c = a.findSegmentPosition(b - e.startTime);
                            return null == c ? null : (c = a.getSegmentReference(c)) ? c.startTime + e.startTime : null
                        }
                        var d = yf(a.a),
                            e = T(a.a),
                            f = c(d.video, b),
                            d = c(d.audio, b);
                        return null != f && null != d ? Math.max(f, d) : null != f ? f : null != d ? d : b
                    }
                    k.ee = function (a, b) {
                        this.b.abr.manager.segmentDownloaded(a, b)
                    };
                    k.zc = function (a) {
                        Jg(this);
                        this.la = a;
                        this.Ta();
                        if (this.g) {
                            var b = this.g;
                            a != b.h && (b.h = a, of (b, b.g))
                        }
                        this.dispatchEvent(new G("buffering", {
                            buffering: a
                        }))
                    };
                    k.ae = function () {
                        zg(this)
                    };
                    k.Ta = function () {
                        if (!this.O) {
                            var a = this.la ? "buffering" : this.f.ended ? "ended" : this.f.paused ? "paused" : "playing";
                            var b = Date.now() / 1E3;
                            if (this.i.stateHistory.length) {
                                var c = this.i.stateHistory[this.i.stateHistory.length - 1];
                                c.duration = b - c.timestamp;
                                if (a == c.state) return
                            }
                            this.i.stateHistory.push({
                                timestamp: b,
                                state: a,
                                duration: 0
                            })
                        }
                    };
                    k.de = function () {
                        if (this.v) {
                            var a = this.v;
                            a.c.forEach(a.o.bind(a, !0))
                        }
                        this.a && Ef(this.a)
                    };

                    function Kg(a, b, c, d, e) {
                        if (!c || 1 > c.length) return a.za(new t(2, 4, 4012)), {};
                        a.b.abr.manager.setVariants(c);
                        a.b.abr.manager.setTextStreams(d);
                        var f = [];
                        e && (f = ["video", "audio"], b.textStreams.length && f.push("text"));
                        e = yf(a.a);
                        var g = a.a;
                        var h = g.c.video || g.c.audio;
                        g = h ? g.b.periods[h.xa] : null;
                        if (b = gc(e.audio, e.video, g ? g.variants : b.variants)) {
                            b.allowedByApplication && b.allowedByKeySystem || (f.push("audio"), f.push("video"));
                            for (var l in e) b = e[l], "audio" == b.type && b.language != c[0].language ? f.push(l) : "text" == b.type &&
                                0 < d.length && b.language != d[0].language && f.push(l)
                        }
                        f = f.filter(za);
                        if (0 < f.length) {
                            c = {};
                            try {
                                c = a.b.abr.manager.chooseStreams(f)
                            } catch (m) {
                                a.za(m)
                            }
                            return c
                        }
                        return {}
                    }

                    function Dg(a, b) {
                        var c = {
                                audio: !1,
                                text: !1
                            },
                            d = ec(b, a.ja, c, a.mb),
                            e = fc(b, a.Da, c, a.lb),
                            d = Kg(a, b, d, e),
                            f;
                        for (f in d) Fg(a, d[f], !0);
                        Gg(a, d, !0);
                        Ag(a);
                        d.text && d.audio && c.text && d.text.language != d.audio.language && (a.A.mode = "showing", Ig(a))
                    }
                    k.ed = function (a) {
                        this.$a = !0;
                        this.b.abr.manager.disable();
                        var b = ec(a, this.ja, void 0, this.mb),
                            c = fc(a, this.Da, void 0, this.lb);
                        a = Kg(this, a, b, c, !0);
                        for (var d in this.G) a[d] = this.G[d].stream;
                        this.G = {};
                        for (d in a) Fg(this, a[d], !0);
                        return a
                    };
                    k.Gc = function () {
                        this.$a = !1;
                        this.b.abr.enabled && this.b.abr.manager.enable();
                        for (var a in this.G) {
                            var b = this.G[a];
                            Bf(this.a, a, b.stream, b.Kc)
                        }
                        this.G = {}
                    };
                    k.ld = function () {
                        this.h && this.h.update && this.h.update()
                    };
                    k.ud = function () {
                        this.g && this.g.Ab()
                    };
                    k.Lb = function (a, b) {
                        var c = yf(this.a),
                            d;
                        for (d in a) {
                            var e = a[d];
                            c[d] != e ? Fg(this, e, !0) : delete a[d]
                        }
                        if (!Na(a) && this.a) {
                            for (d in a) Bf(this.a, d, a[d], b || !1);
                            Ag(this)
                        }
                    };

                    function Ag(a) {
                        Promise.resolve().then(function () {
                            this.O || this.dispatchEvent(new G("adaptation"))
                        }.bind(a))
                    }

                    function zg(a) {
                        Promise.resolve().then(function () {
                            this.O || this.dispatchEvent(new G("trackschanged"))
                        }.bind(a))
                    }

                    function Ig(a) {
                        a.dispatchEvent(new G("texttrackvisibility"))
                    }
                    k.za = function (a) {
                        this.O || this.dispatchEvent(new G("error", {
                            detail: a
                        }))
                    };
                    k.xd = function (a) {
                        this.v ? this.v.v(a) : this.Ya.push(a)
                    };
                    k.hb = function (a) {
                        this.dispatchEvent(a)
                    };
                    k.yd = function () {
                        if (this.f.error) {
                            var a = this.f.error.code;
                            if (1 != a) {
                                var b = this.f.error.msExtendedCode;
                                b && (0 > b && (b += Math.pow(2, 32)), b = b.toString(16));
                                this.za(new t(2, 3, 3016, a, b, this.f.error.message))
                            }
                        }
                    };
                    k.ce = function (a) {
                        var b = ["output-restricted", "internal-error"],
                            c = T(this.a),
                            d = !1,
                            e = 1 == Object.keys(a).length && "00" == Object.keys(a)[0];
                        c.variants.forEach(function (c) {
                            var f = [];
                            c.audio && f.push(c.audio);
                            c.video && f.push(c.video);
                            f.forEach(function (f) {
                                var g = c.allowedByKeySystem;
                                f.keyId && (f = a[e ? "00" : f.keyId], c.allowedByKeySystem = !!f && 0 > b.indexOf(f));
                                g != c.allowedByKeySystem && (d = !0)
                            })
                        });
                        var f = yf(this.a);
                        (f = gc(f.audio, f.video, c.variants)) && !f.allowedByKeySystem && Dg(this, c);
                        d && zg(this)
                    };
                    k.be = function (a, b) {
                        if (this.h && this.h.onExpirationUpdated) this.h.onExpirationUpdated(a, b);
                        this.dispatchEvent(new G("expirationupdated"))
                    };

                    function V(a) {
                        if (!a || a.constructor != U) throw new t(2, 9, 9008);
                        this.a = ig();
                        this.f = a;
                        this.i = Lg(this);
                        this.b = null;
                        this.v = !1;
                        this.j = null;
                        this.g = -1;
                        this.l = 0;
                        this.c = null;
                        this.h = new jg(this.a, a.o, a.getConfiguration().streaming.retryParameters, this.i)
                    }
                    n("shaka.offline.Storage", V);

                    function Mg() {
                        return !!window.indexedDB
                    }
                    V.support = Mg;
                    V.prototype.m = function () {
                        var a = this.a,
                            b = this.h ? this.h.m()["catch"](function () {}).then(function () {
                                if (a) return a.m()
                            }) : Promise.resolve();
                        this.i = this.f = this.h = this.a = null;
                        return b
                    };
                    V.prototype.destroy = V.prototype.m;
                    V.prototype.configure = function (a) {
                        Ca(this.i, a, Lg(this), {}, "")
                    };
                    V.prototype.configure = V.prototype.configure;
                    V.prototype.me = function (a, b, c) {
                        function d(a) {
                            f = a
                        }
                        if (this.v) return Promise.reject(new t(2, 9, 9006));
                        this.v = !0;
                        var e, f = null;
                        return Ng(this).then(function () {
                            X(this);
                            return Og(this, a, d, c)
                        }.bind(this)).then(function (c) {
                            X(this);
                            this.c = c.manifest;
                            this.b = c.Lc;
                            if (this.c.presentationTimeline.$() || this.c.presentationTimeline.wa()) throw new t(2, 9, 9005, a);
                            this.c.periods.forEach(this.o.bind(this));
                            this.g = this.a.c.manifest++;
                            this.l = 0;
                            c = this.c.periods.map(this.B.bind(this));
                            var d = this.b.b,
                                f = kb(this.b);
                            if (d) {
                                if (!f.length) throw new t(2,
                                    9, 9007, a);
                                d.initData = []
                            }
                            e = {
                                key: this.g,
                                originalManifestUri: a,
                                duration: this.l,
                                size: 0,
                                expiration: this.b.bb(),
                                periods: c,
                                sessionIds: f,
                                drmInfo: d,
                                appMetadata: b
                            };
                            return lg(this.h, e)
                        }.bind(this)).then(function () {
                            X(this);
                            if (f) throw f;
                            return Pg(this)
                        }.bind(this)).then(function () {
                            return cg(e)
                        }.bind(this))["catch"](function (a) {
                            return Pg(this)["catch"](y).then(function () {
                                throw a;
                            })
                        }.bind(this))
                    };
                    V.prototype.store = V.prototype.me;
                    V.prototype.remove = function (a) {
                        function b(a) {
                            6013 != a.code && (e = a)
                        }
                        var c = a.offlineUri,
                            d = /^offline:([0-9]+)$/.exec(c);
                        if (!d) return Promise.reject(new t(2, 9, 9004, c));
                        var e = null,
                            f, g, h = Number(d[1]);
                        return Ng(this).then(function () {
                            X(this);
                            return this.a.get("manifest", h)
                        }.bind(this)).then(function (a) {
                            X(this);
                            if (!a) throw new t(2, 9, 9003, c);
                            f = a;
                            a = og(f);
                            g = new cb(this.f.o, b, function () {}, function () {});
                            g.configure(this.f.getConfiguration().drm);
                            return g.init(a, !0)
                        }.bind(this)).then(function () {
                            return hb(g, f.sessionIds)
                        }.bind(this)).then(function () {
                            return g.m()
                        }.bind(this)).then(function () {
                            X(this);
                            if (e) throw e;
                            var b = f.periods.map(function (a) {
                                    return a.streams.map(function (a) {
                                        var b = a.segments.map(function (a) {
                                            a = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a.uri);
                                            return Number(a[1])
                                        });
                                        a.initSegmentUri && (a = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a.initSegmentUri), b.push(Number(a[1])));
                                        return b
                                    }).reduce(w, [])
                                }).reduce(w, []),
                                c = 0,
                                d = b.length,
                                g = this.i.progressCallback;
                            return $f(this.a, b, function () {
                                c++;
                                g(a, c / d)
                            })
                        }.bind(this)).then(function () {
                            X(this);
                            this.i.progressCallback(a, 1);
                            return this.a.remove("manifest",
                                h)
                        }.bind(this))
                    };
                    V.prototype.remove = V.prototype.remove;
                    V.prototype.list = function () {
                        var a = [];
                        return Ng(this).then(function () {
                            X(this);
                            return this.a.forEach("manifest", function (b) {
                                a.push(cg(b))
                            })
                        }.bind(this)).then(function () {
                            return a
                        })
                    };
                    V.prototype.list = V.prototype.list;

                    function Og(a, b, c, d) {
                        function e() {}
                        var f = a.f.o,
                            g = a.f.getConfiguration(),
                            h, l, m;
                        return Jd(b, f, g.manifest.retryParameters, d).then(function (a) {
                            X(this);
                            m = new a;
                            m.configure(g.manifest);
                            return m.start(b, {
                                networkingEngine: f,
                                filterPeriod: this.o.bind(this),
                                onTimelineRegionAdded: function () {},
                                onEvent: function () {},
                                onError: c
                            })
                        }.bind(a)).then(function (a) {
                            X(this);
                            h = a;
                            l = new cb(f, c, e, function () {});
                            l.configure(g.drm);
                            return l.init(h, !0)
                        }.bind(a)).then(function () {
                            X(this);
                            return Qg(h)
                        }.bind(a)).then(function () {
                            X(this);
                            return gb(l)
                        }.bind(a)).then(function () {
                            X(this);
                            return m.stop()
                        }.bind(a)).then(function () {
                            X(this);
                            return {
                                manifest: h,
                                Lc: l
                            }
                        }.bind(a))["catch"](function (a) {
                            if (m) return m.stop().then(function () {
                                throw a;
                            });
                            throw a;
                        })
                    }
                    V.prototype.A = function (a) {
                        for (var b = [], c = Tb(this.f.getConfiguration().preferredAudioLanguage), d = [0, Rb, Sb], e = a.filter(function (a) {
                                return "variant" == a.type
                            }), d = d.map(function (a) {
                                return e.filter(function (b) {
                                    b = Tb(b.language);
                                    return Qb(a, c, b)
                                })
                            }), f, g = 0; g < d.length; g++)
                            if (d[g].length) {
                                f = d[g];
                                break
                            }
                        f || (d = e.filter(function (a) {
                            return a.primary
                        }), d.length && (f = d));
                        f || (f = e, e.map(function (a) {
                            return a.language
                        }).filter(za));
                        var h = f.filter(function (a) {
                            return a.height && 480 >= a.height
                        });
                        h.length && (h.sort(function (a,
                            b) {
                            return b.height - a.height
                        }), f = h.filter(function (a) {
                            return a.height == h[0].height
                        }));
                        f.sort(function (a, b) {
                            return a.bandwidth - b.bandwidth
                        });
                        f.length && b.push(f[Math.floor(f.length / 2)]);
                        b.push.apply(b, a.filter(function (a) {
                            return "text" == a.type
                        }));
                        return b
                    };

                    function Lg(a) {
                        return {
                            trackSelectionCallback: a.A.bind(a),
                            progressCallback: function (a, c) {
                                if (a || c) return null
                            }
                        }
                    }

                    function Ng(a) {
                        return a.a ? a.a.a ? Promise.resolve() : a.a.init(bg) : Promise.reject(new t(2, 9, 9E3))
                    }
                    V.prototype.o = function (a) {
                        var b = {};
                        if (this.j) {
                            var c = this.j.filter(function (a) {
                                    return "variant" == a.type
                                }),
                                d = null;
                            c.length && (d = cc(a, c[0]));
                            d && (d.video && (b.video = d.video), d.audio && (b.audio = d.audio))
                        }
                        Xb(this.b, b, a);
                        Wb(a, this.f.getConfiguration().restrictions, {
                            width: Infinity,
                            height: Infinity
                        })
                    };

                    function Pg(a) {
                        var b = a.b ? a.b.m() : Promise.resolve();
                        a.b = null;
                        a.c = null;
                        a.v = !1;
                        a.j = null;
                        a.g = -1;
                        return b
                    }

                    function Qg(a) {
                        var b = a.periods.map(function (a) {
                            return a.variants
                        }).reduce(w, []).map(function (a) {
                            var b = [];
                            a.audio && b.push(a.audio);
                            a.video && b.push(a.video);
                            return b
                        }).reduce(w, []).filter(za);
                        a = a.periods.map(function (a) {
                            return a.textStreams
                        }).reduce(w, []);
                        b.push.apply(b, a);
                        return Promise.all(b.map(function (a) {
                            return a.createSegmentIndex()
                        }))
                    }
                    V.prototype.B = function (a) {
                        var b, c, d = $b(a, null, null),
                            e = bc(a, null),
                            d = this.i.trackSelectionCallback(d.concat(e));
                        this.j || (this.j = d, this.c.periods.forEach(this.o.bind(this)));
                        for (e = d.length - 1; 0 < e; --e) {
                            var f = !1;
                            for (c = e - 1; 0 <= c; --c)
                                if (d[e].type == d[c].type && d[e].kind == d[c].kind && d[e].language == d[c].language) {
                                    f = !0;
                                    break
                                }
                            if (f) break
                        }
                        f = [];
                        for (e = 0; e < d.length; e++)(b = cc(a, d[e])) ? (b.audio && ((c = f.filter(function (a) {
                            return a.id == b.audio.id
                        })[0]) ? c.variantIds.push(b.id) : (c = b.video ? b.bandwidth / 2 : b.bandwidth, f.push(Rg(this,
                            a, b.audio, c, b.id)))), b.video && ((c = f.filter(function (a) {
                            return a.id == b.video.id
                        })[0]) ? c.variantIds.push(b.id) : (c = b.audio ? b.bandwidth / 2 : b.bandwidth, f.push(Rg(this, a, b.video, c, b.id))))) : f.push(Rg(this, a, dc(a, d[e]), 0));
                        return {
                            startTime: a.startTime,
                            streams: f
                        }
                    };

                    function Rg(a, b, c, d, e) {
                        var f = [],
                            g = a.c.presentationTimeline.na();
                        var h = g;
                        for (var l = c.findSegmentPosition(g), m = null != l ? c.getSegmentReference(l) : null; m;) h = a.a.c.segment++, kg(a.h, c.type, m, (m.endTime - m.startTime) * d / 8, {
                            key: h,
                            data: null,
                            manifestKey: a.g,
                            streamNumber: c.id,
                            segmentNumber: h
                        }), f.push({
                            startTime: m.startTime,
                            endTime: m.endTime,
                            uri: "offline:" + a.g + "/" + c.id + "/" + h
                        }), h = m.endTime + b.startTime, m = c.getSegmentReference(++l);
                        a.l = Math.max(a.l, h - g);
                        b = null;
                        c.initSegmentReference && (h = a.a.c.segment++, b = "offline:" +
                            a.g + "/" + c.id + "/" + h, kg(a.h, c.contentType, c.initSegmentReference, 0, {
                                key: h,
                                data: null,
                                manifestKey: a.g,
                                streamNumber: c.id,
                                segmentNumber: -1
                            }));
                        a = [];
                        null != e && a.push(e);
                        return {
                            id: c.id,
                            primary: c.primary,
                            presentationTimeOffset: c.presentationTimeOffset || 0,
                            contentType: c.type,
                            mimeType: c.mimeType,
                            codecs: c.codecs,
                            frameRate: c.frameRate,
                            kind: c.kind,
                            language: c.language,
                            label: c.label,
                            width: c.width || null,
                            height: c.height || null,
                            initSegmentUri: b,
                            encrypted: c.encrypted,
                            keyId: c.keyId,
                            segments: f,
                            variantIds: a
                        }
                    }

                    function X(a) {
                        if (!a.f) throw new t(2, 9, 9002);
                    }
                    wg.offline = Mg;
                    n("shaka.polyfill.installAll", function () {
                        for (var a = 0; a < Sg.length; ++a) Sg[a]()
                    });
                    var Sg = [];

                    function Y(a) {
                        Sg.push(a)
                    }
                    n("shaka.polyfill.register", Y);

                    function Tg(a) {
                        var b = a.type.replace(/^(webkit|moz|MS)/, "").toLowerCase();
                        if ("function" === typeof Event) var c = new Event(b, a);
                        else c = document.createEvent("Event"), c.initEvent(b, a.bubbles, a.cancelable);
                        a.target.dispatchEvent(c)
                    }
                    Y(function () {
                        if (window.Document) {
                            var a = Element.prototype;
                            a.requestFullscreen = a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || a.webkitRequestFullscreen;
                            a = Document.prototype;
                            a.exitFullscreen = a.exitFullscreen || a.mozCancelFullScreen || a.msExitFullscreen || a.webkitExitFullscreen;
                            "fullscreenElement" in document || (Object.defineProperty(document, "fullscreenElement", {
                                get: function () {
                                    return document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement
                                }
                            }), Object.defineProperty(document,
                                "fullscreenEnabled", {
                                    get: function () {
                                        return document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled
                                    }
                                }));
                            document.addEventListener("webkitfullscreenchange", Tg);
                            document.addEventListener("webkitfullscreenerror", Tg);
                            document.addEventListener("mozfullscreenchange", Tg);
                            document.addEventListener("mozfullscreenerror", Tg);
                            document.addEventListener("MSFullscreenChange", Tg);
                            document.addEventListener("MSFullscreenError", Tg)
                        }
                    });
                    Y(function () {
                        var a = navigator.userAgent;
                        a && 0 <= a.indexOf("CrKey") && delete window.indexedDB
                    });
                    var Ug;

                    function Vg(a, b, c) {
                        if ("input" == a) switch (this.type) {
                            case "range":
                                a = "change"
                        }
                        Ug.call(this, a, b, c)
                    }
                    Y(function () {
                        0 > navigator.userAgent.indexOf("Trident/") || (Ug = HTMLInputElement.prototype.addEventListener, HTMLInputElement.prototype.addEventListener = Vg)
                    });
                    Y(function () {
                        if (4503599627370497 != Math.round(4503599627370497)) {
                            var a = Math.round;
                            Math.round = function (b) {
                                var c = b;
                                4503599627370496 >= b && (c = a(b));
                                return c
                            }
                        }
                    });

                    function Wg(a) {
                        this.f = [];
                        this.b = [];
                        this.a = [];
                        (new O).da("pssh", this.c.bind(this)).parse(a.buffer)
                    }
                    Wg.prototype.c = function (a) {
                        if (!(1 < a.version)) {
                            var b = ab(a.s.La(16)),
                                c = [];
                            if (0 < a.version)
                                for (var d = a.s.D(), e = 0; e < d; ++e) {
                                    var f = ab(a.s.La(16));
                                    c.push(f)
                                }
                            d = a.s.D();
                            a.s.I(d);
                            this.b.push.apply(this.b, c);
                            this.f.push(b);
                            this.a.push({
                                start: a.start,
                                end: a.start + a.size - 1
                            })
                        }
                    };

                    function Xg(a, b) {
                        try {
                            var c = new Yg(a, b);
                            return Promise.resolve(c)
                        } catch (d) {
                            return Promise.reject(d)
                        }
                    }

                    function Yg(a, b) {
                        this.keySystem = a;
                        for (var c = !1, d = 0; d < b.length; ++d) {
                            var e = b[d];
                            var f = {
                                    audioCapabilities: [],
                                    videoCapabilities: [],
                                    persistentState: "optional",
                                    distinctiveIdentifier: "optional",
                                    initDataTypes: e.initDataTypes,
                                    sessionTypes: ["temporary"],
                                    label: e.label
                                },
                                g = !1;
                            if (e.audioCapabilities)
                                for (var h = 0; h < e.audioCapabilities.length; ++h) {
                                    var l = e.audioCapabilities[h];
                                    if (l.contentType) {
                                        g = !0;
                                        var m = l.contentType.split(";")[0];
                                        MSMediaKeys.isTypeSupported(this.keySystem, m) && (f.audioCapabilities.push(l), c = !0)
                                    }
                                }
                            if (e.videoCapabilities)
                                for (h =
                                    0; h < e.videoCapabilities.length; ++h) l = e.videoCapabilities[h], l.contentType && (g = !0, m = l.contentType.split(";")[0], MSMediaKeys.isTypeSupported(this.keySystem, m) && (f.videoCapabilities.push(l), c = !0));
                            g || (c = MSMediaKeys.isTypeSupported(this.keySystem, "video/mp4"));
                            "required" == e.persistentState && (c = !1);
                            if (c) {
                                this.a = f;
                                return
                            }
                        }
                        e = Error("Unsupported keySystem");
                        e.name = "NotSupportedError";
                        e.code = DOMException.NOT_SUPPORTED_ERR;
                        throw e;
                    }
                    Yg.prototype.createMediaKeys = function () {
                        var a = new Zg(this.keySystem);
                        return Promise.resolve(a)
                    };
                    Yg.prototype.getConfiguration = function () {
                        return this.a
                    };

                    function $g(a) {
                        var b = this.mediaKeys;
                        b && b != a && ah(b, null);
                        delete this.mediaKeys;
                        return (this.mediaKeys = a) ? ah(a, this) : Promise.resolve()
                    }

                    function Zg(a) {
                        this.a = new MSMediaKeys(a);
                        this.b = new C
                    }
                    Zg.prototype.createSession = function (a) {
                        if ("temporary" != (a || "temporary")) throw new TypeError("Session type " + a + " is unsupported on this platform.");
                        return new bh(this.a)
                    };
                    Zg.prototype.setServerCertificate = function () {
                        return Promise.resolve(!1)
                    };

                    function ah(a, b) {
                        function c() {
                            b.msSetMediaKeys(d.a);
                            b.removeEventListener("loadedmetadata", c)
                        }
                        Ka(a.b);
                        if (!b) return Promise.resolve();
                        D(a.b, b, "msneedkey", ch);
                        var d = a;
                        try {
                            return 1 <= b.readyState ? b.msSetMediaKeys(a.a) : b.addEventListener("loadedmetadata", c), Promise.resolve()
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }

                    function bh(a) {
                        p.call(this);
                        this.c = null;
                        this.g = a;
                        this.b = this.a = null;
                        this.f = new C;
                        this.sessionId = "";
                        this.expiration = NaN;
                        this.closed = new A;
                        this.keyStatuses = new dh
                    }
                    ba(bh);
                    k = bh.prototype;
                    k.generateRequest = function (a, b) {
                        this.a = new A;
                        try {
                            this.c = this.g.createSession("video/mp4", new Uint8Array(b), null), D(this.f, this.c, "mskeymessage", this.pd.bind(this)), D(this.f, this.c, "mskeyadded", this.nd.bind(this)), D(this.f, this.c, "mskeyerror", this.od.bind(this)), eh(this, "status-pending")
                        } catch (c) {
                            this.a.reject(c)
                        }
                        return this.a
                    };
                    k.load = function () {
                        return Promise.reject(Error("MediaKeySession.load not yet supported"))
                    };
                    k.update = function (a) {
                        this.b = new A;
                        try {
                            this.c.update(new Uint8Array(a))
                        } catch (b) {
                            this.b.reject(b)
                        }
                        return this.b
                    };
                    k.close = function () {
                        try {
                            this.c.close(), this.closed.resolve(), Ka(this.f)
                        } catch (a) {
                            this.closed.reject(a)
                        }
                        return this.closed
                    };
                    k.remove = function () {
                        return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))
                    };

                    function ch(a) {
                        var b = document.createEvent("CustomEvent");
                        b.initCustomEvent("encrypted", !1, !1, null);
                        b.initDataType = "cenc";
                        var c = a.initData;
                        if (c) {
                            var d = new Wg(c);
                            if (1 >= d.a.length) a = c;
                            else {
                                var e = [];
                                for (a = 0; a < d.a.length; a++) e.push(c.subarray(d.a[a].start, d.a[a].end + 1));
                                c = Ha(e, fh);
                                for (a = d = 0; a < c.length; a++) d += c[a].length;
                                d = new Uint8Array(d);
                                for (a = e = 0; a < c.length; a++) d.set(c[a], e), e += c[a].length;
                                a = d
                            }
                        } else a = c;
                        b.initData = a;
                        this.dispatchEvent(b)
                    }

                    function fh(a, b) {
                        return bb(a, b)
                    }
                    k.pd = function (a) {
                        this.a && (this.a.resolve(), this.a = null);
                        this.dispatchEvent(new G("message", {
                            messageType: void 0 == this.keyStatuses.sb() ? "licenserequest" : "licenserenewal",
                            message: a.message.buffer
                        }))
                    };
                    k.nd = function () {
                        this.a ? (eh(this, "usable"), this.a.resolve(), this.a = null) : this.b && (eh(this, "usable"), this.b.resolve(), this.b = null)
                    };
                    k.od = function () {
                        var a = Error("EME PatchedMediaKeysMs key error");
                        a.errorCode = this.c.error;
                        if (this.a) this.a.reject(a), this.a = null;
                        else if (this.b) this.b.reject(a), this.b = null;
                        else switch (this.c.error.code) {
                            case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:
                            case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:
                                eh(this, "output-not-allowed");
                            default:
                                eh(this, "internal-error")
                        }
                    };

                    function eh(a, b) {
                        a.keyStatuses.Kb(b);
                        a.dispatchEvent(new G("keystatuseschange"))
                    }

                    function dh() {
                        this.size = 0;
                        this.a = void 0
                    }
                    var gh;
                    k = dh.prototype;
                    k.Kb = function (a) {
                        this.size = void 0 == a ? 0 : 1;
                        this.a = a
                    };
                    k.sb = function () {
                        return this.a
                    };
                    k.forEach = function (a) {
                        this.a && a(this.a, gh)
                    };
                    k.get = function (a) {
                        if (this.has(a)) return this.a
                    };
                    k.has = function (a) {
                        var b = gh;
                        return this.a && bb(new Uint8Array(a), new Uint8Array(b)) ? !0 : !1
                    };
                    k.entries = function () {};
                    k.keys = function () {};
                    k.values = function () {};

                    function hh() {
                        return Promise.reject(Error("The key system specified is not supported."))
                    }

                    function ih(a) {
                        return a ? Promise.reject(Error("MediaKeys not supported.")) : Promise.resolve()
                    }

                    function jh() {
                        throw new TypeError("Illegal constructor.");
                    }
                    jh.prototype.createSession = function () {};
                    jh.prototype.setServerCertificate = function () {};

                    function kh() {
                        throw new TypeError("Illegal constructor.");
                    }
                    kh.prototype.getConfiguration = function () {};
                    kh.prototype.createMediaKeys = function () {};
                    var lh = "";

                    function mh(a) {
                        lh = a;
                        nh = (new Uint8Array([0])).buffer;
                        navigator.requestMediaKeySystemAccess = oh;
                        delete HTMLMediaElement.prototype.mediaKeys;
                        HTMLMediaElement.prototype.mediaKeys = null;
                        HTMLMediaElement.prototype.setMediaKeys = ph;
                        window.MediaKeys = qh;
                        window.MediaKeySystemAccess = rh
                    }

                    function sh(a) {
                        var b = lh;
                        return b ? b + a.charAt(0).toUpperCase() + a.slice(1) : a
                    }

                    function oh(a, b) {
                        try {
                            var c = new rh(a, b);
                            return Promise.resolve(c)
                        } catch (d) {
                            return Promise.reject(d)
                        }
                    }

                    function ph(a) {
                        var b = this.mediaKeys;
                        b && b != a && th(b, null);
                        delete this.mediaKeys;
                        (this.mediaKeys = a) && th(a, this);
                        return Promise.resolve()
                    }

                    function rh(a, b) {
                        this.a = this.keySystem = a;
                        var c = !1;
                        "org.w3.clearkey" == a && (this.a = "webkit-org.w3.clearkey", c = !1);
                        var d = !1;
                        var e = document.getElementsByTagName("video");
                        var f = e.length ? e[0] : document.createElement("video");
                        for (var g = 0; g < b.length; ++g) {
                            e = b[g];
                            var h = {
                                    audioCapabilities: [],
                                    videoCapabilities: [],
                                    persistentState: "optional",
                                    distinctiveIdentifier: "optional",
                                    initDataTypes: e.initDataTypes,
                                    sessionTypes: ["temporary"],
                                    label: e.label
                                },
                                l = !1;
                            if (e.audioCapabilities)
                                for (var m = 0; m < e.audioCapabilities.length; ++m) {
                                    var q =
                                        e.audioCapabilities[m];
                                    if (q.contentType) {
                                        var l = !0,
                                            r = q.contentType.split(";")[0];
                                        f.canPlayType(r, this.a) && (h.audioCapabilities.push(q), d = !0)
                                    }
                                }
                            if (e.videoCapabilities)
                                for (m = 0; m < e.videoCapabilities.length; ++m) q = e.videoCapabilities[m], q.contentType && (l = !0, f.canPlayType(q.contentType, this.a) && (h.videoCapabilities.push(q), d = !0));
                            l || (d = f.canPlayType("video/mp4", this.a) || f.canPlayType("video/webm", this.a));
                            "required" == e.persistentState && (c ? (h.persistentState = "required", h.sessionTypes = ["persistent-license"]) :
                                d = !1);
                            if (d) {
                                this.b = h;
                                return
                            }
                        }
                        c = "Unsupported keySystem";
                        if ("org.w3.clearkey" == a || "com.widevine.alpha" == a) c = "None of the requested configurations were supported.";
                        c = Error(c);
                        c.name = "NotSupportedError";
                        c.code = DOMException.NOT_SUPPORTED_ERR;
                        throw c;
                    }
                    rh.prototype.createMediaKeys = function () {
                        var a = new qh(this.a);
                        return Promise.resolve(a)
                    };
                    rh.prototype.getConfiguration = function () {
                        return this.b
                    };

                    function qh(a) {
                        this.g = a;
                        this.b = null;
                        this.a = new C;
                        this.c = [];
                        this.f = {}
                    }

                    function th(a, b) {
                        a.b = b;
                        Ka(a.a);
                        var c = lh;
                        b && (D(a.a, b, c + "needkey", a.Cd.bind(a)), D(a.a, b, c + "keymessage", a.Bd.bind(a)), D(a.a, b, c + "keyadded", a.zd.bind(a)), D(a.a, b, c + "keyerror", a.Ad.bind(a)))
                    }
                    k = qh.prototype;
                    k.createSession = function (a) {
                        var b = a || "temporary";
                        if ("temporary" != b && "persistent-license" != b) throw new TypeError("Session type " + a + " is unsupported on this platform.");
                        a = this.b || document.createElement("video");
                        a.src || (a.src = "about:blank");
                        b = new uh(a, this.g, b);
                        this.c.push(b);
                        return b
                    };
                    k.setServerCertificate = function () {
                        return Promise.resolve(!1)
                    };
                    k.Cd = function (a) {
                        var b = document.createEvent("CustomEvent");
                        b.initCustomEvent("encrypted", !1, !1, null);
                        b.initDataType = "webm";
                        b.initData = a.initData;
                        this.b.dispatchEvent(b)
                    };
                    k.Bd = function (a) {
                        var b = vh(this, a.sessionId);
                        b && (a = new G("message", {
                            messageType: void 0 == b.keyStatuses.sb() ? "licenserequest" : "licenserenewal",
                            message: a.message
                        }), b.b && (b.b.resolve(), b.b = null), b.dispatchEvent(a))
                    };
                    k.zd = function (a) {
                        if (a = vh(this, a.sessionId)) wh(a, "usable"), a.a && a.a.resolve(), a.a = null
                    };
                    k.Ad = function (a) {
                        var b = vh(this, a.sessionId);
                        if (b) {
                            var c = Error("EME v0.1b key error");
                            c.errorCode = a.errorCode;
                            c.errorCode.systemCode = a.systemCode;
                            !a.sessionId && b.b ? (c.method = "generateRequest", 45 == a.systemCode && (c.message = "Unsupported session type."), b.b.reject(c), b.b = null) : a.sessionId && b.a ? (c.method = "update", b.a.reject(c), b.a = null) : (c = a.systemCode, a.errorCode.code == MediaKeyError.MEDIA_KEYERR_OUTPUT ? wh(b, "output-restricted") : 1 == c ? wh(b, "expired") : wh(b, "internal-error"))
                        }
                    };

                    function vh(a, b) {
                        var c = a.f[b];
                        return c ? c : (c = a.c.shift()) ? (c.sessionId = b, a.f[b] = c) : null
                    }

                    function uh(a, b, c) {
                        p.call(this);
                        this.f = a;
                        this.h = !1;
                        this.a = this.b = null;
                        this.c = b;
                        this.g = c;
                        this.sessionId = "";
                        this.expiration = NaN;
                        this.closed = new A;
                        this.keyStatuses = new xh
                    }
                    ba(uh);

                    function yh(a, b, c) {
                        if (a.h) return Promise.reject(Error("The session is already initialized."));
                        a.h = !0;
                        try {
                            if ("persistent-license" == a.g)
                                if (c) var d = new Uint8Array(Va("LOAD_SESSION|" + c));
                                else {
                                    var e = Va("PERSISTENT|"),
                                        f = new Uint8Array(e.byteLength + b.byteLength);
                                    f.set(new Uint8Array(e), 0);
                                    f.set(new Uint8Array(b), e.byteLength);
                                    d = f
                                }
                            else d = new Uint8Array(b)
                        } catch (h) {
                            return Promise.reject(h)
                        }
                        a.b = new A;
                        var g = sh("generateKeyRequest");
                        try {
                            a.f[g](a.c, d)
                        } catch (h) {
                            if ("InvalidStateError" != h.name) return a.b = null, Promise.reject(h);
                            setTimeout(function () {
                                try {
                                    this.f[g](this.c, d)
                                } catch (l) {
                                    this.b.reject(l), this.b = null
                                }
                            }.bind(a), 10)
                        }
                        return a.b
                    }
                    k = uh.prototype;
                    k.Mb = function (a, b) {
                        if (this.a) this.a.then(this.Mb.bind(this, a, b))["catch"](this.Mb.bind(this, a, b));
                        else {
                            this.a = a;
                            if ("webkit-org.w3.clearkey" == this.c) {
                                var c = E(b);
                                var d = JSON.parse(c);
                                "oct" != d.keys[0].kty && (this.a.reject(Error("Response is not a valid JSON Web Key Set.")), this.a = null);
                                c = Za(d.keys[0].k);
                                d = Za(d.keys[0].kid)
                            } else c = new Uint8Array(b), d = null;
                            var e = sh("addKey");
                            try {
                                this.f[e](this.c, c, d, this.sessionId)
                            } catch (f) {
                                this.a.reject(f), this.a = null
                            }
                        }
                    };

                    function wh(a, b) {
                        a.keyStatuses.Kb(b);
                        a.dispatchEvent(new G("keystatuseschange"))
                    }
                    k.generateRequest = function (a, b) {
                        return yh(this, b, null)
                    };
                    k.load = function (a) {
                        return "persistent-license" == this.g ? yh(this, null, a) : Promise.reject(Error("Not a persistent session."))
                    };
                    k.update = function (a) {
                        var b = new A;
                        this.Mb(b, a);
                        return b
                    };
                    k.close = function () {
                        if ("persistent-license" != this.g) {
                            if (!this.sessionId) return this.closed.reject(Error("The session is not callable.")), this.closed;
                            var a = sh("cancelKeyRequest");
                            try {
                                this.f[a](this.c, this.sessionId)
                            } catch (b) {}
                        }
                        this.closed.resolve();
                        return this.closed
                    };
                    k.remove = function () {
                        return "persistent-license" != this.g ? Promise.reject(Error("Not a persistent session.")) : this.close()
                    };

                    function xh() {
                        this.size = 0;
                        this.a = void 0
                    }
                    var nh;
                    k = xh.prototype;
                    k.Kb = function (a) {
                        this.size = void 0 == a ? 0 : 1;
                        this.a = a
                    };
                    k.sb = function () {
                        return this.a
                    };
                    k.forEach = function (a) {
                        this.a && a(this.a, nh)
                    };
                    k.get = function (a) {
                        if (this.has(a)) return this.a
                    };
                    k.has = function (a) {
                        var b = nh;
                        return this.a && bb(new Uint8Array(a), new Uint8Array(b)) ? !0 : !1
                    };
                    k.entries = function () {};
                    k.keys = function () {};
                    k.values = function () {};
                    Y(function () {
                        !window.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || (HTMLMediaElement.prototype.webkitGenerateKeyRequest ? mh("webkit") : HTMLMediaElement.prototype.generateKeyRequest ? mh("") : window.MSMediaKeys ? (gh = (new Uint8Array([0])).buffer, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = $g, window.MediaKeys = Zg, window.MediaKeySystemAccess = Yg, navigator.requestMediaKeySystemAccess =
                            Xg) : (navigator.requestMediaKeySystemAccess = hh, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = ih, window.MediaKeys = jh, window.MediaKeySystemAccess = kh))
                    });

                    function zh() {
                        var a = MediaSource.prototype.addSourceBuffer;
                        MediaSource.prototype.addSourceBuffer = function () {
                            var b = a.apply(this, arguments);
                            b.abort = function () {};
                            return b
                        }
                    }

                    function Ah() {
                        var a = MediaSource.prototype.endOfStream;
                        MediaSource.prototype.endOfStream = function () {
                            for (var b, d = 0, e = 0; e < this.sourceBuffers.length; ++e) b = this.sourceBuffers[e], b = b.buffered.end(b.buffered.length - 1), d = Math.max(d, b);
                            if (!isNaN(this.duration) && d < this.duration)
                                for (this.Zb = !0, e = 0; e < this.sourceBuffers.length; ++e) b = this.sourceBuffers[e], b.Tb = !1;
                            return a.apply(this, arguments)
                        };
                        var b = MediaSource.prototype.addSourceBuffer;
                        MediaSource.prototype.addSourceBuffer = function () {
                            var a = b.apply(this, arguments);
                            a.N = this;
                            a.addEventListener("updateend", Bh, !1);
                            this.a || (this.addEventListener("sourceclose", Ch, !1), this.a = !0);
                            return a
                        }
                    }

                    function Bh(a) {
                        var b = a.target,
                            c = b.N;
                        if (c.Zb) {
                            a.preventDefault();
                            a.stopPropagation();
                            a.stopImmediatePropagation();
                            b.Tb = !0;
                            for (a = 0; a < c.sourceBuffers.length; ++a)
                                if (0 == c.sourceBuffers[a].Tb) return;
                            c.Zb = !1
                        }
                    }

                    function Ch(a) {
                        a = a.target;
                        for (var b = 0; b < a.sourceBuffers.length; ++b) a.sourceBuffers[b].removeEventListener("updateend", Bh, !1);
                        a.removeEventListener("sourceclose", Ch, !1)
                    }
                    Y(function () {
                        if (window.MediaSource) {
                            var a = navigator.vendor,
                                b = navigator.appVersion;
                            !a || !b || 0 > a.indexOf("Apple") || (0 <= b.indexOf("Version/8") ? window.MediaSource = null : 0 <= b.indexOf("Version/9") ? zh() : 0 <= b.indexOf("Version/10") && (zh(), Ah()))
                        }
                    });

                    function Z(a) {
                        this.c = [];
                        this.b = [];
                        this.Ba = Dh;
                        if (a) try {
                            a(this.fa.bind(this), this.a.bind(this))
                        } catch (b) {
                            this.a(b)
                        }
                    }
                    var Dh = 0;

                    function Eh(a) {
                        var b = new Z;
                        b.fa(void 0);
                        return b.then(function () {
                            return a
                        })
                    }

                    function Fh(a) {
                        var b = new Z;
                        b.a(a);
                        return b
                    }

                    function Gh(a) {
                        function b(a, b, c) {
                            a.Ba == Dh && (e[b] = c, d++, d == e.length && a.fa(e))
                        }
                        var c = new Z;
                        if (!a.length) return c.fa([]), c;
                        for (var d = 0, e = Array(a.length), f = c.a.bind(c), g = 0; g < a.length; ++g) a[g] && a[g].then ? a[g].then(b.bind(null, c, g), f) : b(c, g, a[g]);
                        return c
                    }

                    function Hh(a) {
                        for (var b = new Z, c = b.fa.bind(b), d = b.a.bind(b), e = 0; e < a.length; ++e) a[e] && a[e].then ? a[e].then(c, d) : c(a[e]);
                        return b
                    }
                    Z.prototype.then = function (a, b) {
                        var c = new Z;
                        switch (this.Ba) {
                            case 1:
                                Ih(this, c, a);
                                break;
                            case 2:
                                Ih(this, c, b);
                                break;
                            case Dh:
                                this.c.push({
                                    L: c,
                                    pb: a
                                }), this.b.push({
                                    L: c,
                                    pb: b
                                })
                        }
                        return c
                    };
                    Z.prototype["catch"] = function (a) {
                        return this.then(void 0, a)
                    };
                    Z.prototype.fa = function (a) {
                        if (this.Ba == Dh) {
                            this.jb = a;
                            this.Ba = 1;
                            for (a = 0; a < this.c.length; ++a) Ih(this, this.c[a].L, this.c[a].pb);
                            this.c = [];
                            this.b = []
                        }
                    };
                    Z.prototype.a = function (a) {
                        if (this.Ba == Dh) {
                            this.jb = a;
                            this.Ba = 2;
                            for (a = 0; a < this.b.length; ++a) Ih(this, this.b[a].L, this.b[a].pb);
                            this.c = [];
                            this.b = []
                        }
                    };

                    function Ih(a, b, c) {
                        Jh.push(function () {
                            if (c && "function" == typeof c) {
                                try {
                                    var a = c(this.jb)
                                } catch (f) {
                                    b.a(f);
                                    return
                                }
                                try {
                                    var e = a && a.then
                                } catch (f) {
                                    b.a(f);
                                    return
                                }
                                a instanceof Z ? a == b ? b.a(new TypeError("Chaining cycle detected")) : a.then(b.fa.bind(b), b.a.bind(b)) : e ? Kh(a, e, b) : b.fa(a)
                            } else 1 == this.Ba ? b.fa(this.jb) : b.a(this.jb)
                        }.bind(a));
                        null == Lh && (Lh = Mh(Nh))
                    }

                    function Kh(a, b, c) {
                        try {
                            var d = !1;
                            b.call(a, function (a) {
                                if (!d) {
                                    d = !0;
                                    try {
                                        var b = a && a.then
                                    } catch (g) {
                                        c.a(g);
                                        return
                                    }
                                    b ? Kh(a, b, c) : c.fa(a)
                                }
                            }, c.a.bind(c))
                        } catch (e) {
                            c.a(e)
                        }
                    }

                    function Nh() {
                        for (; Jh.length;) {
                            null != Lh && (Oh(Lh), Lh = null);
                            var a = Jh;
                            Jh = [];
                            for (var b = 0; b < a.length; ++b) a[b]()
                        }
                    }

                    function Mh() {
                        return 0
                    }

                    function Oh() {}
                    var Lh = null,
                        Jh = [];
                    Y(function (a) {
                        window.setImmediate ? (Mh = function (a) {
                            return window.setImmediate(a)
                        }, Oh = function (a) {
                            return window.clearImmediate(a)
                        }) : (Mh = function (a) {
                            return window.setTimeout(a, 0)
                        }, Oh = function (a) {
                            return window.clearTimeout(a)
                        });
                        if (!window.Promise || a) window.Promise = Z, window.Promise.resolve = Eh, window.Promise.reject = Fh, window.Promise.all = Gh, window.Promise.race = Hh, window.Promise.prototype.then = Z.prototype.then, window.Promise.prototype["catch"] = Z.prototype["catch"]
                    });
                    Y(function () {
                        if (window.HTMLMediaElement) {
                            var a = HTMLMediaElement.prototype.play;
                            HTMLMediaElement.prototype.play = function () {
                                var b = a.apply(this, arguments);
                                b && b["catch"](function () {});
                                return b
                            }
                        }
                    });

                    function Ph() {
                        return {
                            droppedVideoFrames: this.webkitDroppedFrameCount,
                            totalVideoFrames: this.webkitDecodedFrameCount,
                            corruptedVideoFrames: 0,
                            creationTime: NaN,
                            totalFrameDelay: 0
                        }
                    }
                    Y(function () {
                        if (window.HTMLVideoElement) {
                            var a = HTMLVideoElement.prototype;
                            !a.getVideoPlaybackQuality && "webkitDroppedFrameCount" in a && (a.getVideoPlaybackQuality = Ph)
                        }
                    });

                    function Qh(a, b, c) {
                        return new window.TextTrackCue(a, b, c)
                    }

                    function Rh(a, b, c) {
                        return new window.TextTrackCue(a + "-" + b + "-" + c, a, b, c)
                    }
                    Y(function () {
                        if (!window.VTTCue && window.TextTrackCue) {
                            var a = TextTrackCue.length;
                            if (3 == a) window.VTTCue = Qh;
                            else if (6 == a) window.VTTCue = Rh;
                            else {
                                try {
                                    var b = !!Qh(1, 2, "")
                                } catch (c) {
                                    b = !1
                                }
                                b && (window.VTTCue = Qh)
                            }
                        }
                    });
                }.call(g, this));
                if (typeof (module) != "undefined" && module.exports) module.exports = g.shaka;
                else if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                        return g.shaka
                    }.call(exports, __webpack_require__, exports, module),
                    __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                else this.shaka = g.shaka;
            })();

            //# sourceMappingURL=shaka-player.compiled.map

            /***/
        })
/******/
        ]);
});
//# sourceMappingURL=dash-shaka-playback.js.map
