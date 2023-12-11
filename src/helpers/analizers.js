export function GiveBestPlayerFromEveryTeam(array = []) {
	const tempSet = new Set();
	const result = {};
	const objWithAverages = GiveAveragePointsForEveryPlayer(array);

	Object.values(objWithAverages).forEach(player => {
		if (tempSet.has(player.team)) {
			result[player.team] =
				result[player.team].pointsPerGame > player.pointsPerGame ? result[player.team] : player;
		} else {
			result[player.team] = player;
			tempSet.add(player.team);
		}
	});
	return Object.values(result);
}

export function GiveAveragePointsForEveryPlayer(array = []) {
	const result = {};
	const tempSet = new Set();
	array.forEach(player => {
		if (tempSet.has(player.name)) {
			result[player.name] = {
				...result[player.name],
				totalPoints: result[player.name].totalPoints + player.points,
				gamesPlayed: result[player.name].gamesPlayed + 1,
				pointsPerGame: (
					(result[player.name].totalPoints + player.points) /
					(result[player.name].gamesPlayed + 1)
				).toFixed(2),
			};
		} else {
			result[player.name] = {
				...player,
				totalPoints: player.points,
				gamesPlayed: 1,
				pointsPerGame: player.points,
			};
			tempSet.add(player.name);
		}
	});
	return result;
}

export function GiveArrayMostPointsInAGame(array = []) {
	const result = {};
	array.forEach(player => {
		if (result[player.team]) {
			if (result[player.team].points < player.points) {
				result[player.team] = player;
			}
		} else {
			result[player.team] = player;
		}
	});
	return Object.values(result);
}

export function GiveArrayMostPointsByATeam(array = []) {
	const result = {};
	array.forEach(player => {
		if (result[player.team]) {
			result[player.team] += player.points;
		} else {
			result[player.team] = player.points;
		}
	});
	return Object.entries(result).map(([key, value]) => ({
		team: key,
		points: value,
	}));
}

export function GiveArrayPointsScoredBasedOnPlayedTimes(array = []) {
	return array.map(player => {
		return {
			...player,
			pointsPerGame: (player.points / player.playedTimes).toFixed(2),
		};
	});
}
