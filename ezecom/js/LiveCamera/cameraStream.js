/***************************************************************************/
/*                                                                         */
/*  Developed by Chhenghong EANG.                                          */
/*  EZECOM LIVE TRAFFIC CAMERA 08/28/2017                                  */
/*  VERSION 2.0                                                            */
/*                                                                         */
/***************************************************************************/
var _$_eb17 = ["value", "url", "getElementById", "POST", "checkGet", "no_session", "pt-BR", "#player", "images/ezecom-logo.png", "top-right", "#745DA3", "https://ezecom.com.kh", "Player", "ajax", "setPageload", "setted", "reload", "set_session_camera"];

function display_camera(_0xFED4, _0xFEFD) {
    set_session(_0xFED4, _0xFEFD)
}

function play_camera() {
    var _0xFF26 = document[_$_eb17[2]](_$_eb17[1])[_$_eb17[0]];
    $[_$_eb17[13]]({
        type: _$_eb17[3],
        url: _0xFF26 + _$_eb17[4],
        data: {},
        success: function (_0xFF4F) {
            if (_0xFF4F != _$_eb17[5]) {
                var _0xFF26 = document[_$_eb17[2]](_$_eb17[1])[_$_eb17[0]];
                var _0xFF78 = new Clappr[_$_eb17[12]]({
                    source: _0xFF4F,
                    plugins: [DashShakaPlayback],
                    shakaConfiguration: {
                        preferredAudioLanguage: _$_eb17[6],
                        streaming: {
                            rebufferingGoal: 15
                        }
                    },
                    shakaOnBeforeLoad: function (_0xFFA1) {},
                    parentId: _$_eb17[7],
                    autoPlay: true,
                    watermark: _0xFF26 + _$_eb17[8],
                    position: _$_eb17[9],
                    mediacontrol: {
                        seekbar: _$_eb17[10],
                        buttons: _$_eb17[10]
                    },
                    watermarkLink: _$_eb17[11]
                   
                })
            } else {
                setPageload()
            }
        }
    })
}

function setPageload() {
    var _0xFF26 = document[_$_eb17[2]](_$_eb17[1])[_$_eb17[0]];
    $[_$_eb17[13]]({
        type: _$_eb17[3],
        url: _0xFF26 + _$_eb17[14],
        data: {},
        success: function (_0xFFCA) {
            if (_0xFFCA == _$_eb17[15]) {
                location[_$_eb17[16]]()
            }
        }
    })
}

function set_session(_0xFED4, _0xFEFD) {
    var _0xFF26 = document[_$_eb17[2]](_$_eb17[1])[_$_eb17[0]];
    $[_$_eb17[13]]({
        type: _$_eb17[3],
        url: _0xFF26 + _$_eb17[17],
        data: {
            id: _0xFED4,
            name: _0xFEFD
        },
        success: function (_0xFFCA) {
            if (_0xFFCA == _$_eb17[15]) {
                location[_$_eb17[16]]()
            }
        }
    })
}
