export function SplitStringToArray(csvString) {
	return csvString.split(/\r\n|\r|\n/);
}

export function FormatArray(rawArray) {
	return rawArray
		.filter(row => row.trim().length !== 0)
		.map(row => {
			const temparray = row.split(',').map(cell => cell.trim());
			return {
				name: temparray[0],
				team: temparray[1],
				playedTimes: parseInt(temparray[2]),
				points: parseInt(temparray[3]),
			};
		});
}

export function SanitazeArray(rawArray) {
	const SanitazeArray = FormatArray(rawArray);
	return SanitazeArray;
}
