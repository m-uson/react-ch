import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import {
	AddPost,
	EditPost,
	Login,
	Main,
	Post,
	Posts,
	Register,
} from "./pages/index";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="posts" element={<Posts />} />
				<Route path="/:id" element={<Post />} />
				<Route path="/:id/edit" element={<EditPost />} />
				<Route path="/add-post" element={<AddPost />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Layout>
	);
}

export default App;
