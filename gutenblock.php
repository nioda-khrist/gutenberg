<?php

/**
* Plugin Name: Guten Block
* Plugin URI: http://www.mywebsite.com/thank-you-plugin
* Description: The very first plugin that I have ever created.
* Version: 1.0
* Author: Your Name
* Author URI: http://www.mywebsite.com
*/

function plugin_start(){

    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

    // add gutenberg script
    wp_register_script( 'guten-block-script', plugins_url('build/index.js', __FILE__), $asset_file['dependencies'], $asset_file['version'] );

    // add editor styles
    wp_register_style( 'guten-block-style', plugins_url('/build/editorStyle.css', __FILE__), array('wp-edit-blocks') );

    // add frontend styles
    wp_register_style( 'guten-block-frontstyle', plugins_url('/build/frontStyle.css', __FILE__), array('wp-edit-blocks') );

    // add jquery in front end
    wp_register_script( 'guten-jquery', plugins_url('/src/guten-jquery.js', __FILE__), array('jquery') );

    // register all scripts
    register_block_type( 'gutenblock/gutenblock-script', array(
        'editor_script' => 'guten-block-script',
        'editor_style' => 'guten-block-style',
        'style'  => 'guten-block-frontstyle',
        'script' => 'guten-jquery'
    ) );
}

add_action( 'init', 'plugin_start' );