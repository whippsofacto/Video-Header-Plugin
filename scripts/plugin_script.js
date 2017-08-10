console.log("hello world from the video headers plugin");


// Create the variables
var header = document.getElementsByTagName('header')[0];
var div = document.createElement('div');
var container = document.createElement('div');


// Add variable to document
container.id="my_player_container";
div.id = 'myPlayer';
container.appendChild(div);
header.insertBefore(container,header.childNodes[0]);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
      var myPlayer;
      function onYouTubeIframeAPIReady() {
          myPlayer = new YT.Player('myPlayer', {
          height: '390',
          width: '640',
          videoId: 'cTXannG2M94',
          playerVars:{
            'autoplay':'1',
            'controls':'0',
            'modestbranding':'1',
            'showinfo': '0',
            'rel':'0',
            'playlist':'cTXannG2M94',
            'loop': '1'
          },
          events: {
            'onReady': onPlayerReady,
          }
        });
      }


//   The API will call this function when the video player is ready.
     function onPlayerReady(event) {
       //mute the video
       event.target.mute();
       //play clip in highest available quality
       event.target.setPlaybackQuality('hd720');
     }

// add class to iframe
jQuery('#my_player_container').addClass('wp-custom-header');

/* ----------------- TEST AREA ------------------------*/
//
var button = document.createElement('button');
button.innerHTML = "HELLO PUSH!";
button.id = "pw_button";
header.insertBefore(button,header.childNodes[0]);


//test Vars
jQuery(document).ready(function($) {
	$('#pw_button').on('click', function() {
		alert(plugin_script_vars.alert);
	});
});
