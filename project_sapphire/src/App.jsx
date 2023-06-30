import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						index
						element={<About />}
					/>
					<Route
						path="/developer/:id"
						element={<Profile />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
