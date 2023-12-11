import React from 'react';
import {useLocation} from 'react-router-dom';
import {GiveArrayMostPointsInAGame} from '../helpers/analizers';
import {SortArrayByPoints} from '../helpers/helpers';
import StatsTable from '../components/statsTable';

export default function MostPointsInASingleMatchePage() {
	const location = useLocation();
	const array = location.state['stats'];

	const [statsArray, setStatsArray] = React.useState([]);
	React.useEffect(() => {
		const tempArray = GiveArrayMostPointsInAGame(array);
		setStatsArray(SortArrayByPoints(tempArray));
	}, []);

	return (
		<>
			<h2>Most Points in a Single Match</h2>
			<StatsTable
				stats={statsArray}
				type={1}
			/>
		</>
	);
}
