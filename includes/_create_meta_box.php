<?php

function header_video_meta() {
    add_meta_box( //id
                  'video_header_meta',
                  //metabox title as it is displayed
                  __( 'Video Header', 'video-header-textdomain' ),
                  //callback function that outputs the html of the box
                  'video_meta_callback',
                  //post type to display the box
                  ['projects', 'page'] );
}


function video_meta_callback( $page ) {
  wp_nonce_field( basename( __FILE__ ), 'video_nonce' );
  $video_stored_meta = get_post_meta( $post->ID );
  ?>

  <p>
      <label for="meta-text" class="video-row-title"><?php _e( 'Input Video', 'video-textdomain' )?></label>
      <input type="text" class='widefat' name="meta-text" id="meta-text" value="<?php if ( isset ( $video_stored_meta['meta-text'] ) ) echo $video_stored_meta['meta-text'][0]; ?>" />
  </p>

  <?php
}
