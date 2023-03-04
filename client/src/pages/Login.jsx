import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<form
			onSubmit={(e) => e.preventDefault()}
			className="container m-auto w-1/3 h-60 mt-40"
		>
			<h1 className="text-center font-medium text-lg mb-6">Authorization</h1>
			<input
				type="text"
				placeholder="Username"
				className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2  px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
			/>
			<input
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
					Don't have an account?
					<Link
						to={"/register"}
						className="font-medium text-decoration underline ml-2"
					>
						Sign up
					</Link>
				</div>
			</div>
		</form>
	);
};

export default Login;
