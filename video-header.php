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


function load_my_scripts() {
  wp_enqueue_script('plugin-script', plugins_url( '/scripts/plugin_script.js', __FILE__ ),array( 'jquery' ),false,true);
}
add_action('wp_enqueue_scripts','load_my_scripts');
// .
?>
