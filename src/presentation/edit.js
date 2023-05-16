/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	return (
		<section { ...useBlockProps() }>
			<div
				{ ...useInnerBlocksProps(
					{ className: 'presentation' },
					{
						allowedBlocks: [ 'presentations/slide' ],
						template: [ [ 'presentations/slide', {} ] ],
					}
				) }
			></div>
		</section>
	);
}
