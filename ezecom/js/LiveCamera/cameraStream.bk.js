// 8/28/2017
// Developed by Chhenghong EANG
// LIVE STREAMING EZECOM CAMERA 

function display_camera(id, name) {
    set_session(id, name);
}

function play_camera() {

    var base_url = document.getElementById("url").value;
    $.ajax({
        type: "POST",
        url: base_url + "checkGet",
        data: {},
        success: function (http) {
            //alert(http);
            if (http != "no_session") {
                var base_url = document.getElementById("url").value;

                var player = new Clappr.Player({
                    source: http,
                    plugins: [DashShakaPlayback],
                    shakaConfiguration: {
                        preferredAudioLanguage: 'pt-BR',
                        streaming: {
                            rebufferingGoal: 15
                        }
                    },
                    shakaOnBeforeLoad: function (shaka_player) {
                        // shaka_player.getNetworkingEngine().registerRequestFilter() ...
                    },
                    parentId: '#player',
                    autoPlay: true,
                    //poster: "image/ezecom-logo.png",
                    watermark: base_url + "images/ezecom-logo.png",
                    position: 'top-right',
                    mediacontrol: {
                        seekbar: "#745DA3",
                        buttons: "#745DA3"
                    },
                    watermarkLink: 'https://ezecom.com.kh'
                   

                });


            } else {
                setPageload();
            }
        }
    });

}

function setPageload() {
    var base_url = document.getElementById("url").value;
    $.ajax({
        type: "POST",
        url: base_url + "setPageload",
        data: {},
        success: function (dta) {
            if (dta == "setted") {

                location.reload();

            }
        }
    });

}

function set_session(id, name) {
    var base_url = document.getElementById("url").value;
    $.ajax({
        type: "POST",
        url: base_url + "set_session_camera",
        data: {
            id: id,
            name: name
        },
        success: function (dta) {
            if (dta == "setted") {

                location.reload();

            }
        }
    });
}
