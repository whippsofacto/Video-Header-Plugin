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

//adding the database creation functions
//include '_create-db.php';
//register_activation_hook( __FILE__, 'db_install');
//include '_meta-box.php';


//make a global variable
global $myAlert;

// assign text to the variable
$myAlert = "cTXannG2M94";

function load_my_scripts() {
  //call the variable within the load_scripts function
  global $myAlert;
  wp_enqueue_script('plugin-script', plugins_url( '/scripts/plugin_script.js', __FILE__ ),array( 'jquery' ),false,true);
  // pass this array of elements to the javascript file
  wp_localize_script('plugin-script', 'plugin_script_vars', array(
      //add the $myAlert var to the alert key
			'alert' => __($myAlert,'whippy')
		)
	);
}

function load_my_styles(){
  wp_enqueue_style('video-plugin-styles', plugins_url( '/styles/video-styles.css', __FILE__ ));
}

add_action('wp_enqueue_scripts','load_my_scripts');
add_action('wp_enqueue_scripts','load_my_styles');

// .
?>
