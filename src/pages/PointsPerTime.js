import React from 'react';
import {useLocation} from 'react-router-dom';
import {GiveArrayPointsScoredBasedOnPlayedTimes} from '../helpers/analizers';
import StatsTable from '../components/statsTable';
import {SortArrayByPointsPerGame} from '../helpers/helpers';

export default function PointsPerTimePage() {
	const location = useLocation();
	const array = location.state['stats'];

	const [statsArray, setStatsArray] = React.useState([]);
	React.useEffect(() => {
		const tempArray = GiveArrayPointsScoredBasedOnPlayedTimes(array);
		setStatsArray(SortArrayByPointsPerGame(tempArray));
	}, []);

	return (
		<>
			<h2>Points Per Time</h2>
			<StatsTable
				stats={statsArray}
				type={3}
			/>
		</>
	);
}
