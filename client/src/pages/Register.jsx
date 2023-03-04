import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../redux/slices/auth";

const Register = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(registerUser());
		setUsername("");
		setPassword("");
	};

	return (
		<form onSubmit={handleSubmit} className="container m-auto w-1/3 h-60 mt-40">
			<h1 className="text-center font-medium text-lg mb-6">Registration</h1>
			<input
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				type="text"
				placeholder="Username"
				className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2  px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
			/>
			<input
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				type="password"
				placeholder="Password"
				className="mt-4 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2  px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
			/>
			<div className="flex justify-between items-end  mt-5">
				<button
					className="py-1 px-4 font-medium border	border-blue-400 rounded-[5px]"
					type="submit"
				>
					Next
				</button>
				<div>
					Have an account?
					<Link
						to={"/login"}
						className="font-medium text-decoration underline ml-2"
					>
						Log in now
					</Link>
				</div>
			</div>
		</form>
	);
};

export default Register;
