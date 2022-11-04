import { Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/CartPage/CartPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { Layout } from "./pages/Layout/Layout";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="*" element={<NotFoundPage />} />

				{/* <Route path="" element={} /> */}
			</Route>
		</Routes>
	);
}

export default App;
