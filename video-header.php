<?php
/*
Plugin Name: My Video Header
Description: Basic plugin to allow custom video headers to be displayed on each page.
Version:     0.0.1
Author:      Stephen
Author URI:  https://www.github.com/whippsofacto
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/


include '_meta-box.php';

function load_my_scripts() {
  global $post_class;
  //print for testing the value of $post_class
  //print_r($post_class . "hello");
  if (!empty($post_class)){
  wp_enqueue_script('plugin-script', plugins_url( '/scripts/plugin_script.js', __FILE__ ),array( 'jquery' ),false,true);
  // pass this array of elements to the javascript file
  wp_localize_script('plugin-script', 'plugin_script_vars', array(
      //add the $myAlert var to the alert key
			'alert' => __($post_class,'whippy')
		)
	);
} else {
  wp_enqueue_script('jQuery', true ,array( 'jquery' ),false,true);

}
}

function load_my_styles(){
  wp_enqueue_style('video-plugin-styles', plugins_url( '/styles/video-styles.css', __FILE__ ));
}

add_action('wp_enqueue_scripts','load_my_scripts');
add_action('wp_enqueue_scripts','load_my_styles');

// .
?>
