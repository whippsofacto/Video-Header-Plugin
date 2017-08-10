<?php

    // Retrieves the stored value from the database
    $meta_value = get_post_meta( get_the_ID(), 'meta-text', true );

    // Checks and displays the retrieved value
    if( !empty( $meta_value ) ) {
        echo "<h1>" . $meta_value  "</h1>";
    }
