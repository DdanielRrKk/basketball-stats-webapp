import React from 'react';
import {useLocation} from 'react-router-dom';
import {GiveArrayMostPointsByATeam} from '../helpers/analizers';
import StatsTable from '../components/statsTable';
import {SortArrayByPoints} from '../helpers/helpers';

export default function PointsPerTeamPage() {
	const location = useLocation();
	const array = location.state['stats'];

	const [statsArray, setStatsArray] = React.useState([]);
	React.useEffect(() => {
		const tempArray = GiveArrayMostPointsByATeam(array);
		setStatsArray(SortArrayByPoints(tempArray));
	}, []);

	return (
		<>
			<h2>Points Per Team</h2>
			<StatsTable
				stats={statsArray}
				type={4}
			/>
		</>
	);
}
