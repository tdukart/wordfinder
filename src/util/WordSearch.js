import wordList from 'word-list-json';

let sortAndBreakString = ( string ) => {
	let filteredString = string.replace( /[^A-Z]/gi, '' );
	let letters = filteredString.toUpperCase().split( '' );
	letters.sort();

	return letters;
};

let disassembleString = ( string ) => {
	let filteredString = string.replace( /[^A-Z]/gi, '' ).toUpperCase();

	let components = {};
	filteredString.split( '' ).forEach( ( letter ) => {
		letter = letter.toUpperCase();
		components[ letter ] = components[ letter ] ? components[ letter ] + 1 : 1;
	} );

	return components;
};

let preprocess = () => {
	return new Promise( ( resolve, reject ) => {
		let processed = wordList.map( ( word ) => ([ word, disassembleString( word ) ]) );
		resolve( processed );
	} )
};
let preprocessPromise = preprocess();

export default ( needle = '' ) => {
	return new Promise( ( resolve, reject ) => {
		preprocessPromise.then( ( preprocessedWordList ) => {
			let disassembledNeedle = disassembleString( needle );

			let matches = preprocessedWordList.filter( ( haystackItem ) => {
				return Object.keys( haystackItem[ 1 ] ).every( ( letter ) => {
					if ( !disassembledNeedle[ letter ] || disassembledNeedle[ letter ] < haystackItem[ 1 ][ letter ] ) {
						return false;
					} else {
						return true;
					}
				} )
			} );

			let matchedWords = matches.map( ( match ) => (match[ 0 ]) );

			resolve( matchedWords );
		} );
	} );
}
