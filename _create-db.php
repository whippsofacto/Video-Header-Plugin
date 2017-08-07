<?php
function db_install(){
   // Wordpress Database GLOBAL
   global $wpdb;
   //Name the table is the "wpdb-prefix whippy header
   $table_name = $wpdb->prefix . "whippy_header";
   $charset_collate = $wpdb->get_charset_collate();
   $sql = "CREATE TABLE $table_name (
  id mediumint(9) NOT NULL AUTO_INCREMENT,
  header_name varchar(55),
  video_url varchar(55) NOT NULL,
  PRIMARY KEY  (id)
  ) $charset_collate;";

  require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
  dbDelta( $sql );
}
?>
