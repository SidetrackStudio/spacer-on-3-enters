<?php
/**
 * Plugin Name:     Three Entersto Spacer
 * Plugin URI:      https://github.com/pbrocks/spacer-on-3-enters
 * Description:     Custom blocks for WordPress.
 * Author:          pbrocks
 * Author URI:      https://github.com/pbrocks
 * Text Domain:     spacer-on-3-enters
 * Domain Path:     /languages
 * Version:         0.1.1
 *
 * @package         spacer_on_3_enters
 */


if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'plugins_loaded', 'load_spacer_on_3_enters_init' );
/**
 * load_spacer_on_3_enters_init
 *
 * Acticvate php files found in folders
 *
 * @return null
 */
function load_spacer_on_3_enters_init() {
	if ( file_exists( __DIR__ . '/inc' ) && is_dir( __DIR__ . '/inc' ) ) {
		foreach ( glob( __DIR__ . '/inc/*.php' ) as $filename ) {
			require $filename;
		}
	}
}


function spacer_on_3_enters_editor_assets() {
	$url = untrailingslashit( plugin_dir_url( __FILE__ ) );

	// Scripts.
	wp_enqueue_script(
		'spacer-on-3-enters-js',
		$url . '/build/index.js',
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-plugins',
			'wp-edit-post',
		)
	);
	// Styles.
	wp_enqueue_style(
		'spacer-on-3-enters-editor-css',
		$url . '/build/editor.css',
		array( 'wp-edit-blocks' )
	);
}

add_action( 'enqueue_block_editor_assets', 'spacer_on_3_enters_editor_assets' );
/**
 * [spacer_on_3_enters_assets] Hook assets into the editor.
 *
 * @return [type] [description]
 */
function spacer_on_3_enters_assets() {
	$url = untrailingslashit( plugin_dir_url( __FILE__ ) );

	wp_enqueue_style(
		'spacer-on-3-enters-frontend-css',
		$url . '/build/style.css'
	);
}

add_action( 'enqueue_block_assets', 'spacer_on_3_enters_assets' );

/**
 * Adding a block category creates a Panel
 */
function create_spacer_on_3_enters_panel( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'spacer-on-3-enters',
				'title' => __( 'Three Enters Blocks Panel', 'spacer-on-3-enters' ),
			),
		)
	);
}
add_filter( 'block_categories', 'create_spacer_on_3_enters_panel', 10, 2 );
