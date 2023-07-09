import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/dashboard';
import ErrorPage from '../pages/error';
import HomePage from '../pages/home';

export default function AppRoutes() {
	return (
		<Routes>
			<Route index element={<HomePage />} />
			<Route path='dashboard'>
				<Route index element={<DashboardPage />} />
			</Route>
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	);
}
