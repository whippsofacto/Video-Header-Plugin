<?php
// echo out the meta info
add_action( 'template_redirect', 'inspect_page_id' );
function inspect_page_id() {

    global $post_class;
    $page_id = get_queried_object_id();
    echo $page_id;

    if ( !empty( $page_id ) ) {
      /* Get the custom post class. */
      $post_class = get_post_meta( $page_id, 'smashing_post_class', true );
      echo  $post_class;

   }

}
