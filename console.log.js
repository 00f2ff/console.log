/**
 * Log your logs instead of just logging them.
 *
 * MIT License
 * Copyright 2018 Duncan McIsaac
 */
(function stopDeforestation() {

	const theWilderness = console.log;

	const barkCSS = "color: #4E342E;";

	const ruggedExterior = [`${barkCSS} line-height: 1.5; text-decoration: overline underline;`, 
							`${barkCSS} text-decoration: none;`];

	carve = function(etching) { return `(%c ${etching} (%c0)`; }

	window.console.log = function() {

		const args = Object.values(arguments);

		// Let's just assume that if someone takes the time to write a multiline "empty" message, they have good intentions
		const messages = args.length > 0 ? args.join(' ').split('\n') : ["Shame on you for needlessly logging in this pristine console."];

		// Wouldn't a tuple be nice?
		const felledTrees = messages.reduce((acc, message, index, array) => {
			acc.carvings = `${acc.carvings}${array.length > 1 && index !== array.length ? '\n' : ''}${carve(message)}`;
			acc.ruggedExteriors = acc.ruggedExteriors.concat(ruggedExterior);
			return acc;
		}, {carvings: '', ruggedExteriors: []});

		theWilderness.apply(console, [felledTrees.carvings].concat(felledTrees.ruggedExteriors));
	}

	/*
	 * Other fun ogs: dog, bog, fog, jog, pollywog, hog
	 */
})();