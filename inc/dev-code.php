<?php

add_filter( 'render_block', 'block_starter_show_block_type', 10, 2 );
function block_starter_show_block_type( $block_content, $block ) {
	if ( 'block-starter/swiper' === $block['blockName'] ) {
		wp_enqueue_script( 'move-slider-bar' );
	}
	if ( true === WP_DEBUG ) {
		$block_content = "<div class='wp-block' data-blockType='{$block['blockName']}'>{$block_content}<h5 style=\"color:salmon\">{$block['blockName']}</h5></div>";
	}
	return $block_content;
}

function sidetrack_register_template() {
	$post_type_object           = get_post_type_object( 'page' );
	$post_type_object->template = array(
		array( 'core/image' ),
		array( 'core/audio' ),
		array( 'core/paragraph' ),
	);
}
add_action( 'init', 'sidetrack_register_template' );


