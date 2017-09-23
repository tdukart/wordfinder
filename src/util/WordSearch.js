import Promise from 'bluebird';

let disassembleString = ( string ) => {
	let filteredString = string.replace( /[^A-Z]/gi, '' ).toUpperCase();

	let components = {};
	filteredString.split( '' ).forEach( ( letter ) => {
		letter = letter.toUpperCase();
		components[ letter ] = components[ letter ] ? components[ letter ] + 1 : 1;
	} );

	return components;
};

let processWordList = new Promise( ( resolve, reject ) => {
	import('deconstructed-word-list/dist/up-to-10').then( ( wordList ) => {
		resolve( wordList );
	} );
} );

export default ( needle = '' ) => {
	return new Promise( ( resolve, reject ) => {
		processWordList.then( ( preprocessedWordList ) => {
			let disassembledNeedle = disassembleString( needle );

			let matches = preprocessedWordList.filter( ( haystackItem ) => {
				return Object.keys( haystackItem[ 1 ] ).every( ( letter ) => {
					if ( !disassembledNeedle[ letter ] ) {
						return false;
					}
					return disassembledNeedle[ letter ] >= haystackItem[ 1 ][ letter ];
				} )
			} );

			let matchedWords = matches.map( ( match ) => (match[ 0 ]) );

			resolve( matchedWords );
		} );
	} );
};
