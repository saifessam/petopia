import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home';

export default function AppRoutes() {
	return (
		<Routes>
			<Route index element={<HomePage />} />
		</Routes>
	);
}
