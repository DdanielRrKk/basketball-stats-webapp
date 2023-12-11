export default function TableBody({stats, type = 0}) {
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
				<tbody>
					{stats.map((row, index) => {
						return (
							<tr key={index}>
								<td>{row.name}</td>
								<td>{row.team}</td>
								<td>{row.points}</td>
							</tr>
						);
					})}
				</tbody>
			);

		case 2:
			return (
				<tbody>
					{stats.map((row, index) => {
						return (
							<tr key={index}>
								<td>{row.name}</td>
								<td>{row.team}</td>
								<td>{row.playedTimes}</td>
								<td>{row.points}</td>
							</tr>
						);
					})}
				</tbody>
			);

		case 3:
			return (
				<tbody>
					{stats.map((row, index) => {
						return (
							<tr key={index}>
								<td>{row.name}</td>
								<td>{row.team}</td>
								<td>{row.playedTimes}</td>
								<td>{row.pointsPerGame}</td>
							</tr>
						);
					})}
				</tbody>
			);

		case 4:
			return (
				<tbody>
					{stats.map((row, index) => {
						return (
							<tr key={index}>
								<td>{row.team}</td>
								<td>{row.points}</td>
							</tr>
						);
					})}
				</tbody>
			);

		case 5:
			return (
				<tbody>
					{stats.map((row, index) => {
						return (
							<tr key={index}>
								<td>{row.team}</td>
								<td>{row.name}</td>
							</tr>
						);
					})}
				</tbody>
			);

		default:
			break;
	}

	return (
		<tbody>
			{stats.map((row, index) => {
				return (
					<tr key={index}>
						<td>{row.name}</td>
						<td>{row.team}</td>
						<td>{row.playedTimes}</td>
						<td>{row.points}</td>
					</tr>
				);
			})}
		</tbody>
	);
}
