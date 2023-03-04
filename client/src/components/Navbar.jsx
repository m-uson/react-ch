import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const isAuth = false;

	const activeStyles = {
		color: "rgb(37 99 235 / var(--tw-text-opacity))",
	};

	return (
		<div className="flex items-center justify-between h-16">
			<NavLink
				to="/"
				className="text-black font-bold text-[20px] hover:hover:text-blue-600 "
			>
				MERN Blog
			</NavLink>
			{isAuth && (
				<ul className="flex">
					<li className="mr-[30px]">
						<NavLink
							to="/"
							className="text-sx text-gray-700 font-medium"
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Home
						</NavLink>
					</li>
					<li className="mr-[30px]">
						<NavLink
							to="/posts"
							className="text-sx text-gray-700  font-medium"
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							My Posts
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/add-post"
							className="text-sx text-gray-700  font-medium"
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Add Post
						</NavLink>
					</li>
				</ul>
			)}
			<div className="px-4 py-2 border	border-blue-400 rounded-[5px]  font-medium">
				{isAuth ? <button>Log out</button> : <Link to={"/login"}>Sign In</Link>}
			</div>
		</div>
	);
};

export default Navbar;
