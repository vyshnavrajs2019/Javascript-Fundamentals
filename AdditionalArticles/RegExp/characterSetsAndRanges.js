// Character Sets and Ranges

console.log(( "Mop top".match(/[tm]op/gi) ));
console.log(( "Voila".match(/V[oi]la/) ));

// Ranges
console.log(( "Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g) ));

// Excluding ranges
console.log("SHDF38749123KLMNSDOS./F.[.".match(/[^\d\s\w]/g));


// Escaping with []
console.log("absdjs2340]892347,/.".match(/[/]/)); // no need of escaping within []
console.log("absdjs2340]892347,/.".match(/[\]]/)); // needs escaping

