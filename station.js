var mytrack = document.getElementById('myTrack');
var playButton = document.getElementById('playButton');
var muteButton = document.getElementById('muteButton');
var roundImg = document.getElementById('round_img');
var playstr = document.getElementById('playlist');


playButton.addEventListener('click', playOrPause, false);
muteButton.addEventListener('click', muteOrUnmute, false);

var all = $("#allButton");
var pop = $("#popButton");
var rock = $('#rockButton');

$('.Play').on('click',function(e){
    $('.intro').addClass('hidden')
    $('.select').removeClass('hidden')
    $('.genre-button').removeClass('hidden')
})

all.on('click',function(e){
    $('.select').addClass('hidden')
    $('.all').removeClass('hidden')
})

pop.on('click', function(e){
    $('.select').addClass('hidden')
    $('.all').not('.pop').addClass('hidden');
    $('.pop').removeClass('hidden')
})

rock.on('click', function(e){
    $('.select').addClass('hidden')
    $('.all').not('.rock').addClass('hidden')
    $('.rock').removeClass('hidden')
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