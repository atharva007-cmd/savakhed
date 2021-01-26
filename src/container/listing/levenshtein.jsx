const levenshteinDistance = (main = "", search = "") => {
	const track = Array(search.length + 1)
		.fill(null)
		.map(() => Array(main.length + 1).fill(null));
	for (let i = 0; i <= main.length; i += 1) {
		track[0][i] = i;
	}
	for (let j = 0; j <= search.length; j += 1) {
		track[j][0] = j;
	}
	for (let j = 1; j <= search.length; j += 1) {
		for (let i = 1; i <= main.length; i += 1) {
			const indicator = main[i - 1] === search[j - 1] ? 0 : 1;
			track[j][i] = Math.min(
				track[j][i - 1] + 1, // deletion
				track[j - 1][i] + 1, // insertion
				track[j - 1][i - 1] + indicator // substitution
			);
		}
	}

	return track[search.length][main.length];
};

export default levenshteinDistance;