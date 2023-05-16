const { store } = window.__experimentalInteractivity;

store( {
	actions: {
		slideshow: {
			startPresentation: ( { context } ) => {
				const elem = document.querySelector( '.entry-content' );
				if ( elem ) {
					if ( ! context.presenting ) {
						elem.requestFullscreen();
						context.presenting = true;
					} else {
						document.exitFullscreen();
						context.presenting = false;
					}
				}
			},
		},
	},
} );
