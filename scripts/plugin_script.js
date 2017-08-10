console.log("hello world from the video headers plugin");


// 1. Create the variables
var header = document.getElementsByTagName('header')[0];
var div = document.createElement('div');
var img = document.createElement('img');
var link = document.createElement('a');
var button = document.createElement('button');



// 2. Adding the markup
if (typeof header !== 'undefined') {
  console.log('Yo mo fo!');
  console.log(header.innerHTML);

  //img class of header-video__media
  img.className = 'header-video__media';
  //set the image attributes
  img.setAttribute('data-video-height','315');
  img.setAttribute('data-video-width','560');
  img.setAttribute('data-teaser','video/teaser-video');
  img.setAttribute('data-video-URL','https://www.youtube.com/embed/Scxs7L0vhZ4');
  img.setAttribute('src','img/masthead.jpg');
  //set the link attributes
  link.setAttribute('href','https://www.youtube.com/embed/Scxs7L0vhZ4');
  link.className = 'header-video__play-trigger';
  link.id = 'header-video__play-trigger';
  link.innerHTML = 'Play';
  //set the button attributes
  button.setAttribute('type','button');
  button.className = 'header-video__close-trigger';
  button.id = 'header-video__close-trigger';
  button.innerHTML = 'Close Video';
  //add the img to the div
  div.appendChild(img);
  //add the a to the div
  div.appendChild(link);
  //add the button to the div
  div.appendChild(button);
  //add the class name video-header;
  div.className = 'header-video';
  // Add a div to the DOM as the first element after the header array.
  header.insertBefore(div,header.childNodes[0]);
  } else {
   console.log('No tags of that name here!');
 }




 // 3. Adding functionality
 // Function to map the compatibility mode jQuery to $

 (function($) {
   var HeaderVideo = function(settings) {
    if (settings.element.length === 0) {
        return;
    }
    this.init(settings);
 };


HeaderVideo.prototype.init = function(settings) {
    this.$element = $(settings.element);
    this.settings = settings;
    this.videoDetails = this.getVideoDetails();

    $(this.settings.closeTrigger).hide();
    this.setFluidContainer();
    this.bindUIActions();

    if(this.videoDetails.teaser && Modernizr.video && !Modernizr.touch) {
        this.appendTeaserVideo();
    }
};


HeaderVideo.prototype.bindUIActions = function() {
    var that = this;
    $(this.settings.playTrigger).on('click', function(e) {
        e.preventDefault();
        that.appendIframe();
    });
    $(this.settings.closeTrigger).on('click', function(e){
        e.preventDefault();
        that.removeIframe();
    });
};

HeaderVideo.prototype.appendIframe = function() {
    var html = '<iframe id="header-video__video-element" src="'+this.videoDetails.videoURL+'?rel=0&amp;hd=1&autohide=1&showinfo=0&autoplay=1&enablejsapi=1&origin=*" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    $(this.settings.playTrigger).fadeOut();
    $(this.settings.closeTrigger).fadeIn();
    this.$element.append(html);
};

HeaderVideo.prototype.removeIframe = function() {
    $(this.settings.playTrigger).fadeIn();
    $(this.settings.closeTrigger).fadeOut();
    this.$element.find('#header-video__video-element').remove();
};

HeaderVideo.prototype.appendTeaserVideo = function() {
    var source = this.videoDetails.teaser;
    var html = '<video autoplay="true" loop="true" muted id="header-video__teaser-video" class="header-video__teaser-video"><source src="'+source+'.webm" type="video/mp4"><source src="'+source+'.mp4" type="video/mp4"></video>';
    this.$element.append(html);
};

HeaderVideo.prototype.setFluidContainer = function() {
    var element = this.$element;
    element.data('aspectRatio', this.videoDetails.videoHeight / this.videoDetails.videoWidth);

    $(window).resize(function() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        element.width(Math.ceil(windowWidth));
        element.height(Math.ceil(windowWidth * element.data('aspectRatio'))); //Set the videos aspect ratio, see https://css-tricks.com/fluid-width-youtube-videos/

        if(windowHeight < element.height()) {
            element.width(Math.ceil(windowWidth));
            element.height(Math.ceil(windowHeight));
        }
    }).trigger('resize');
};

HeaderVideo.prototype.getVideoDetails = function() {
    var mediaElement = $(this.settings.media);

    return {
        videoURL: mediaElement.attr('data-video-URL'),
        teaser: mediaElement.attr('data-teaser'),
        videoHeight: mediaElement.attr('data-video-height'),
        videoWidth: mediaElement.attr('data-video-width')
    };
};

})( jQuery ); // end of Jquery function

/*
 <div class="header-video">
     <img src="img/masthead.jpg"
          class="header-video__media"
          data-video-URL="https://www.youtube.com/embed/Scxs7L0vhZ4"
          data-teaser="video/teaser-video"
          data-video-width="560"
          data-video-height="315">
     <a href="https://www.youtube.com/embed/Scxs7L0vhZ4" class="header-video__play-trigger" id="header-video__play-trigger">Play video</a>
     <button type="button" class="header-video__close-trigger" id="header-video__close-trigger">Close video</button>
 </div>
*/
