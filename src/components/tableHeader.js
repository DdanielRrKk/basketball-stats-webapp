export default function TableHeader({type = 0}) {
	/**
	 * type:
	 * 1 - most points in one game
	 * 2 - most points in every game
	 * 3 - points per game for a player
	 * 4 - points per game for a team
	 * 5 - best player based on points scored
	 */

	switch (type) {
		case 1:
			return (
				<thead>
					<tr>
						<th>Player Name</th>
						<th>Team</th>
						<th>Career High</th>
					</tr>
				</thead>
			);

		case 2:
			return (
				<thead>
					<tr>
						<th>Player Name</th>
						<th>Team</th>
						<th>Time Played</th>
						<th>Most Points</th>
					</tr>
				</thead>
			);

		case 3:
			return (
				<thead>
					<tr>
						<th>Player Name</th>
						<th>Team</th>
						<th>Time Played</th>
						<th>Points Per Game</th>
					</tr>
				</thead>
			);

		case 4:
			return (
				<thead>
					<tr>
						<th>Team</th>
						<th>Total Points</th>
					</tr>
				</thead>
			);

		case 5:
			return (
				<thead>
					<tr>
						<th>Team</th>
						<th>Best Player</th>
					</tr>
				</thead>
			);

		default:
			return (
				<thead>
					<tr>
						<th>Player Name</th>
						<th>Team</th>
						<th>Time Played</th>
						<th>Points Scored</th>
					</tr>
				</thead>
			);
	}
	return null;
}
