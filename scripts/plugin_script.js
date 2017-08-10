console.log("hello world from the video headers plugin");


// 1. Create the variables
var header = document.getElementsByTagName('header')[0];
var div = document.createElement('div');
var iframe = document.createElement('iframe');
var link = document.createElement('a');
var button = document.createElement('button');


/*
iframe.setAttribute('autoplay','1');
iframe.setAttribute('controls','0');
iframe.setAttribute('modestbranding','1');
iframe.setAttribute('width','1000');
iframe.setAttribute('height','315');
iframe.setAttribute('frameborder','0');
iframe.setAttribute('allowfullscreen','0');
iframe.setAttribute('src','https://www.youtube.com/embed/cTXannG2M94');
*/

div.id = 'myPlayer';
header.insertBefore(div,header.childNodes[0]);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
      var myPlayer;
      function onYouTubeIframeAPIReady() {
          myPlayer = new YT.Player('myPlayer', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          playerVars:{
            'autoplay':'1',
            'controls':'0',
            'modestbranding':'1',
            'showinfo': '0',
            'rel':'0'
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

  // 4. The API will call this function when the video player is ready.
       function onPlayerReady(event) {
         event.target.playVideo();
       }
       // 5. The API calls this function when the player's state changes.
           //    The function indicates that when playing a video (state=1),
           //    the player should play for six seconds and then stop.
           var done = false;
           function onPlayerStateChange(event) {
             if (event.data == YT.PlayerState.PLAYING && !done) {
               setTimeout(stopVideo, 6000);
               done = true;
             }
           }
           function stopVideo() {
             myPlayer.stopVideo();
           }

 // Function to map the compatibility mode jQuery to $
 (function($) {

 })( jQuery ); // end of Jquery function


/* <iframe width="560"
 *          height="315"
 *          src="https://www.youtube.com/embed/cTXannG2M94"
 *          frameborder="0" allowfullscreen>
 *           </iframe> */
