import React from 'react';

import {GiveBestPlayerFromEveryTeam} from './helpers/analizers';
import {SplitStringToArray, SanitazeArray} from './helpers/validators';

import StatsTable from './components/statsTable';
import {NavLink, Outlet} from 'react-router-dom';

export default function App() {
	const [statsArray, setStatsArray] = React.useState([]);
	const [isShowAllStats, setIsShowAllStats] = React.useState(false);
	const [selectedLink, setSelectedLink] = React.useState(0);

	const handleFileUpload = e => {
		e.preventDefault();
		const file = e.target.files[0];

		if (!file) {
			return;
		}

		const fileExtension = file.name.split('.').pop().toLowerCase();
		console.log(fileExtension);
		if (fileExtension === 'csv') {
			const reader = new FileReader();
			reader.onload = e => {
				const csv = reader.result;
				const array = SplitStringToArray(csv);
				const sanitazedArray = SanitazeArray(array);
				setStatsArray(sanitazedArray);
			};
			reader.readAsText(e.target.files[0]);
		}
		if (fileExtension === 'json') {
			const reader = new FileReader();
			reader.onload = e => {
				const json = reader.result;
				const array = JSON.parse(json);
				setStatsArray(array);
			};
			reader.readAsText(e.target.files[0]);
		}
	};

	const handleShowAllStatsClick = () => {
		setIsShowAllStats(!isShowAllStats);
	};

	const handleSelectedLink = value => {
		setSelectedLink(value);
	};

	console.log(selectedLink);
	return (
		<div className='App'>
			<h1>Basketball Player Statistics</h1>

			<div className='inputs'>
				<label>Upload CSV/JSON</label>
				<input
					type='file'
					onChange={handleFileUpload}
				/>
			</div>

			<nav className='navbar'>
				<NavLink
					className={selectedLink === 1 ? 'active-link' : ''}
					to='/most-point-in-a-match'
					state={{stats: statsArray}}
					onClick={() => handleSelectedLink(1)}
				>
					Most points in a match
				</NavLink>
				<NavLink
					className={selectedLink === 2 ? 'active-link' : ''}
					to='/most-point-in-all-matches'
					state={{stats: statsArray}}
					onClick={() => handleSelectedLink(2)}
				>
					Most points in all matches
				</NavLink>
				<NavLink
					className={selectedLink === 3 ? 'active-link' : ''}
					to='/point-per-time'
					state={{stats: statsArray}}
					onClick={() => handleSelectedLink(3)}
				>
					Points per time
				</NavLink>
				<NavLink
					className={selectedLink === 4 ? 'active-link' : ''}
					to='/point-per-team'
					state={{stats: statsArray}}
					onClick={() => handleSelectedLink(4)}
				>
					Points per team
				</NavLink>
				<NavLink
					className={selectedLink === 5 ? 'active-link' : ''}
					to='/best-player'
					state={{stats: statsArray}}
					onClick={() => handleSelectedLink(5)}
				>
					Best player
				</NavLink>
			</nav>

			<Outlet />

			<button onClick={handleShowAllStatsClick}>{isShowAllStats ? 'Hide' : 'Show'} All Stats</button>

			{isShowAllStats && (
				<div className='allStats'>
					<h3>All Stats</h3>
					<StatsTable
						className='statsTable'
						stats={statsArray}
					/>
				</div>
			)}
		</div>
	);
}
