/*
	raise n to the power of m
*/

// raise(n)(m)

var raise = (a) =>
	(b) => {
		var total = a
		for(var i=1; i<b; i++)
			total = total * a
			return total
}


// raise(n).to(m)

var raise = (a) => ({
		to: (b)=> {
			var total = a;
			for(var i=1; i<b; i++)
				total = total * a
				return total
		}
});
