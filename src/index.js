import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import BestPlayerPage from './pages/bestPlayer';
import MostPointsInAllMatchesPage from './pages/mostPointsInAllMatches';
import PointsPerTeamPage from './pages/pointsPerTeam';
import PointsPerTimePage from './pages/PointsPerTime';
import MostPointsInASingleMatchePage from './pages/mostPointsInASingleMatch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route
				path='/'
				element={<App />}
			>
				<Route
					path='/most-point-in-a-match'
					element={<MostPointsInASingleMatchePage />}
				/>
				<Route
					path='/most-point-in-all-matches'
					element={<MostPointsInAllMatchesPage />}
				/>
				<Route
					path='/point-per-time'
					element={<PointsPerTimePage />}
				/>
				<Route
					path='/point-per-team'
					element={<PointsPerTeamPage />}
				/>
				<Route
					path='/best-player'
					element={<BestPlayerPage />}
				/>
			</Route>
		</Routes>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
