import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
	const token = (req.headers.autorization || "").replace(/Bearer\s?/, "");

	if (token) {
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			req.usedId = decoded.id;

			next();
		} catch (err) {
			console.log(err);
			return res.status(403).json({
				message: "Нет доступа",
			});
		}
	} else {
		return res.status(500).json({
			message: "Нет токена",
		});
	}
};
