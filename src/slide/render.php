<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<section <?php echo get_block_wrapper_attributes(['class' => 'slide__container']); ?> data-wp-init="actions.slideshow.init">
	<div class="slide_content"><?php echo $content; ?></div>
</section>