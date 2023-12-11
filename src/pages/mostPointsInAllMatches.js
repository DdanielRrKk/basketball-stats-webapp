import React from 'react';
import {useLocation} from 'react-router-dom';
import {GiveArrayMostPointsInAGame} from '../helpers/analizers';
import StatsTable from '../components/statsTable';
import {SortArrayByPoints} from '../helpers/helpers';

export default function MostPointsInAllMatchesPage() {
	const location = useLocation();
	const array = location.state['stats'];

	const [statsArray, setStatsArray] = React.useState([]);
	React.useEffect(() => {
		const tempArray = GiveArrayMostPointsInAGame(array);
		setStatsArray(SortArrayByPoints(tempArray));
	}, []);

	return (
		<>
			<h2>Most Points in All Matches</h2>
			<StatsTable
				stats={statsArray}
				type={2}
			/>
		</>
	);
}
