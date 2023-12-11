// import {useLocation} from 'react-router-dom';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

export default function StatsTable({stats, type = 0}) {
	/**
	 * type:
	 * 1 - most points in one game
	 * 2 - most points in every game
	 * 3 - points per game for a player
	 * 4 - points per game for a team
	 * 5 - best player based on points scored
	 */
	if (!stats) return null;

	return (
		<table>
			<TableHeader type={type} />
			<TableBody
				stats={stats}
				type={type}
			/>
		</table>
	);
}
