import React from 'react';
import {useLocation} from 'react-router-dom';
import {GiveBestPlayerFromEveryTeam} from '../helpers/analizers';
import StatsTable from '../components/statsTable';

export default function BestPlayerPage() {
	const location = useLocation();
	const array = location.state['stats'];

	const [statsArray, setStatsArray] = React.useState([]);
	React.useEffect(() => {
		setStatsArray(GiveBestPlayerFromEveryTeam(array));
	}, []);

	return (
		<>
			<h2>Best Player Section</h2>
			<StatsTable
				stats={statsArray}
				type={5}
			/>
		</>
	);
}
