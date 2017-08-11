<?php
// echo out the meta info
add_action( 'template_redirect', 'inspect_page_id' );
function inspect_page_id() {
    // make $post_class available as a global variable so as it can be reused
    // in the scripts function
    global $post_class;

    // get the page ID
    $page_id = get_queried_object_id();
    //echo the page id - test variable value
    //echo $page_id;

    //if the id is not empty, populate the post class
    if ( !empty( $page_id ) ) {
      /* Get the custom post class. */
      $post_class = get_post_meta( $page_id, 'smashing_post_class', true );
      //echo the post_class - test variable value
      //echo  $post_class;

   }

}
