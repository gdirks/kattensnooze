var channel_max = 1;   // number of channels
    audiochannel = new Array();
    audiochannel['channel'] = new Audio(); // create a new audio object
    audiochannel['finished'] = -1; // expected end time for this channel

function play_sound(s) {
     
        thistime = new Date();
        if (audiochannel['finished'] < thistime.getTime()) {           
            audiochannel['finished'] = thistime.getTime() + document.getElementById(s).duration*1000;
            audiochannel['channel'].src = document.getElementById(s).src;
            audiochannel['channel'].load();
            audiochannel['channel'].play();
        }    
}