export function SortArrayByPoints(array = []) {
	return array.sort((a, b) => {
		return b.points - a.points;
	});
}
export function SortArrayByPointsPerGame(array = []) {
	return array.sort((a, b) => {
		return b.pointsPerGame - a.pointsPerGame;
	});
}
