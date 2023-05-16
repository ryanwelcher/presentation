<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$post = get_post();
?>
<section data-wp-context='{"presenting": true }' <?php echo get_block_wrapper_attributes(['class' => 'presentation']); ?> style="width:100%; height:100%;">
	<h1 data-wp-bind.hidden="context.presenting"><?php echo $post->post_title; ?></h1>
	<button data-wp-on.click="actions.slideshow.startPresentation">Start Presentation</button>
	<div data-wp-bind.hidden="!context.presenting"><?php echo $content; ?></div>
</section>