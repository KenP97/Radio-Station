var mytrack = document.getElementById('myTrack');
var playButton = document.getElementById('playButton');
var muteButton = document.getElementById('muteButton');
var roundImg = document.getElementById('round_img');
var playstr = document.getElementById('playlist');


playButton.addEventListener('click', playOrPause, false);
muteButton.addEventListener('click', muteOrUnmute, false);

var played = []

var all = $("#allButton");
var sports = $("#sportsButton");
var news = $('#newsButton');
var music = $('#musicButton');

$('.Play').on('click',function(e){
    $('.intro').addClass('hidden')
    $('.select').removeClass('hidden')
    $('.genre-button').removeClass('hidden')
    $('button').removeClass('active')
})

$('.title-name').on('click', function(e){
    $('.intro').removeClass('hidden')
    $('.select').addClass('hidden')
    $('.genre-button').addClass('hidden')
    $('.all').addClass('hidden')
})

all.on('click',function(e){
    $('.select').addClass('hidden')
    $('.all').removeClass('hidden')
    all.addClass('active')
    $('button').not(all).removeClass('active')
})

sports.on('click', function(e){
    $('.select').addClass('hidden')
    $('.all').not('.sports').addClass('hidden');
    $('.sports').removeClass('hidden')
    sports.addClass('active')
    $('button').not(sports).removeClass('active')
})

news.on('click', function(e){
    $('.select').addClass('hidden')
    $('.all').not('.news').addClass('hidden')
    $('.news').removeClass('hidden')
    news.addClass('active')
    $('button').not(news).removeClass('active')
})

music.on('click', function(e){
    $('.select').addClass('hidden')
    $('.all').not('.music').addClass('hidden')
    $('.music').removeClass('hidden')
    music.addClass('active')
    $('button').not(music).removeClass('active')
})

$('#shuffleButton').on('click', function(e){
    var which = Math.floor(Math.random()*24);
    if (played[-1] === which){
        var which = Math.floor(Math.random()*24);
        if (played[-1] === which){
            var which = Math.floor(Math.random()*24);
            window['c'+which]()
            played.push(which)
        } else {
            window['c'+which]()
            played.push(which)
        }       
    } else {
        window['c'+which]()
        played.push(which)
    }    
    
})


function c1() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://113fm-edge1.cdnstream.com/1728_128');
    roundImg.setAttribute('src', 'channel_images/chouse.jpg');
    playstr.innerHTML = "113.FM Coffee House";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c2() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://oom-radiohio.streamguys1.com/cols/wbnsam.mp3');
    roundImg.setAttribute('src', 'channel_images/espn1460.jpg');
    playstr.innerHTML = "1460 ESPN";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c3() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://mp3-hb.grooveradio.com');
    roundImg.setAttribute('src', 'channel_images/groove.jpg');
    playstr.innerHTML = "GrooveRadio";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c4() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://streaming.radio.co/sd88832e85/listen');
    roundImg.setAttribute('src', 'channel_images/motorsport.jpg');
    playstr.innerHTML = "Motorsport Radio";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c5() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://playerservices.live.streamtheworld.com/api/livestream-redirect/WDWSAM_SC');
    roundImg.setAttribute('src', 'channel_images/newstalk.jpg');
    playstr.innerHTML = "NewsTalk 1400 WDWS";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c6() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://bbcwssc.ic.llnwd.net/stream/bbcwssc_mp1_ws-ename');
    roundImg.setAttribute('src', 'channel_images/bbc.jpg');
    playstr.innerHTML = "BBC English Americas";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c7() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://streaming.radio.co/s45d150acf/listen');
    roundImg.setAttribute('src', 'channel_images/brad.jpg');
    playstr.innerHTML = "101 Business Radio";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c8() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://113fm.cdnstream1.com/1726_128');
    roundImg.setAttribute('src', 'channel_images/hitusa.jpg');
    playstr.innerHTML = "113.FM Hits USA";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c9() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://playerservices.streamtheworld.com/api/livestream-redirect/KRXOFM_SC');
    roundImg.setAttribute('src', 'channel_images/thefranchise.jpg');
    playstr.innerHTML = "107.7 FM The Franchise";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c10() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://2.trafficstream.nl/allsports_main.mp3');
    roundImg.setAttribute('src', 'channel_images/allsports.jpg');
    playstr.innerHTML = "AllSportsRadio";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c11() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://playerservices.streamtheworld.com/api/livestream-redirect/KKSEFM_SC');
    roundImg.setAttribute('src', 'channel_images/altitude.jpg');
    playstr.innerHTML = "Altitude Sports 92.5 FM";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c12() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://stream.zeno.fm/wz94cu2m0rquv');
    roundImg.setAttribute('src', 'channel_images/cwn.jpg');
    playstr.innerHTML = "CWN Sports";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c13() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://s2.radio.co/s847c08ad4/listen');
    roundImg.setAttribute('src', 'channel_images/fcum.jpg');
    playstr.innerHTML = "FCUM Radio";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c14() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://playerservices.streamtheworld.com/api/livestream-redirect/KNBRAM_SC');
    roundImg.setAttribute('src', 'channel_images/knbr.jpg');
    playstr.innerHTML = "KNBR 104.5";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c15() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://playerservices.streamtheworld.com/api/livestream-redirect/KDZRAM_SC');
    roundImg.setAttribute('src', 'channel_images/patriot.jpg');
    playstr.innerHTML = "AM 1640 The Patriot";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c16() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://kcrw.streamguys1.com/kcrw_192k_mp3_news_internet_radio');
    roundImg.setAttribute('src', 'channel_images/kcrw.jpg');
    playstr.innerHTML = "KCRW 89.9 HD3 News 24";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c17() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://playerservices.streamtheworld.com/api/livestream-redirect/KDOWAM_SC');
    roundImg.setAttribute('src', 'channel_images/kdow.jpg');
    playstr.innerHTML = "KDOW 1220 AM";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c18() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://ice42.securenetsystems.net/KLOE');
    roundImg.setAttribute('src', 'channel_images/kloe.jpg');
    playstr.innerHTML = "KLOE 730 AM";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c19() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://live.wostreaming.net/direct/sinclair-komoammp3-ibc2');
    roundImg.setAttribute('src', 'channel_images/komo.jpg');
    playstr.innerHTML = "KOMO News 1000 AM";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c20() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://node-12.zeno.fm:80/8ty8szwpwfeuv');
    roundImg.setAttribute('src', 'channel_images/newmix.png');
    playstr.innerHTML = "Hits of Bollywood";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c21() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://listen.1brightonfm.co.uk:10000/obfm_mp3');
    roundImg.setAttribute('src', 'channel_images/1btn.jpg');
    playstr.innerHTML = "1BTN";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c22() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://bigrradio.cdnstream1.com/5124_128');
    roundImg.setAttribute('src', 'channel_images/aceradio.jpg');
    playstr.innerHTML = "AceRadio - Soft Hits";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c23() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://uk5.antennaradio.co.uk:8296/stream');
    roundImg.setAttribute('src', 'channel_images/antenna.jpg');
    playstr.innerHTML = "Antenna Radio";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}

function c24() {
    mytrack.pause();
    mytrack.setAttribute('src', 'http://64.34.175.149:8000/blurfm03');
    roundImg.setAttribute('src', 'channel_images/blurfm.jpg');
    playstr.innerHTML = "Blur FM";
    mytrack.play();
    playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
    playButton.style.backgroundColor = '#fff4f4';
}
	


function playOrPause() {
    if (!mytrack.paused && !mytrack.ended) {
        mytrack.pause();

        playButton.style.backgroundImage = 'url(icon/icons8-play-50.png)';
        playButton.style.backgroundColor = '#FFF';


    } else {
        mytrack.play();

        playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
        playButton.style.backgroundColor = '#fff4f4';


    }
}

function muteOrUnmute() {
    if (mytrack.muted == true) {
        mytrack.muted = false;

        muteButton.style.backgroundImage = 'url(icon/icons8-voice-15.png)';
        muteButton.style.backgroundColor = '#FFF';
    } else {
        mytrack.muted = true;

        muteButton.style.backgroundImage = 'url(icon/icons8-mute-15.png)';
        muteButton.style.backgroundColor = '#fff4f4';
    }
}