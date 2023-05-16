const { store } = window.__experimentalInteractivity;

store( {
	actions: {
		slideshow: {
			handleExit: ( stuff ) => {
				console.log( stuff );
			},
			init: () => {
				console.log( 'iniitted!' );
			},
		},
	},
} );
