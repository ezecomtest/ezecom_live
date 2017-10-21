var data = [];
var jw_width = 750, jw_height = 450;
// Outputs some logs about jwplayer
function print(t, obj) {
    for (var a in obj) {
        if (typeof obj[a] === "object")
            print(t + '.' + a, obj[a]);
        else
            data[t + '.' + a] = obj[a];
    }
}



function play_camera(){
    startPlayer($('#stream_url').val(),$('#secure').val(),$('#base_url').val());
}
 
$(document).ready(function() {
 
    jwplayer('player').setup({
        wmode: 'transparent',
        width: jw_width,
        height: jw_height,
        stretching: 'exactfit'
    });
 
    $('#btn_start').click(function() {
        startPlayer($('#stream_url').val(),$('#secure').val(),$('#base_url').val());
    });
 
    $('#btn_stop').click(function() {
        jwplayer('player').stop();
    });
 
 
 
    startPlayer($('#stream_url').val(),$('#secure').val());
});
 
// Starts the flash player
function startPlayer(stream,token,base_url) {

    jwplayer('player').setup({
        height: jw_height,
        width: jw_width,
        stretching: 'exactfit',
        image: base_url+ 'images/ezecom-logo.png','logo':{'file': base_url + 'images/ezecom-logo.png',  'hide':'false', 'out':'0.7','position':'top-right','link':'https://www.ezecom.com.kh'}, 
        sources: [{
                file: stream
            }],
        rtmp: {
            bufferlength: 3,
            securetoken: token
        }
    });
 
    jwplayer("player").onMeta(function(event) {
        var info = "";
        for (var key in data) {
            info += key + " = " + data[key] + "<BR>";
        }
        print("event", event);
    });
 
    jwplayer('player').play();
}