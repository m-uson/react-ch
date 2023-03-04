import UserModel from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
	try {
		const { username, password } = req.body;

		const isUsed = await UserModel.findOne({ username });

		if (isUsed) {
			return res.json({
				message: "Данный username уже занят.",
			});
		}

		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);

		const newUser = new User({
			username,
			password: hash,
		});

		const token = jwt.sign(
			{
				id: newUser._id,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "30d" }
		);

		await newUser.save();

		res.json({
			newUser,
			token,
			message: "Регистрация прошла успешно.",
		});
	} catch (err) {
		res.status(500).json({ message: "Ошибка при создании пользователя." });
		console.log(err);
	}
};

export const login = async (req, res) => {
	try {
		const { username, password } = req.body;

		const user = await UserModel.findOne({ username });

		if (!user) {
			return res.json({
				message: "Такого user не существует.",
			});
		}

		const isPosswordCorrect = await bcrypt.compare(password, user.password);

		if (!isPosswordCorrect) {
			return res.status(403).json({
				message: "Неверный пароль",
			});
		}

		const token = jwt.sign(
			{
				id: user._id,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "30d" }
		);

		res.status(200).json({
			user,
			token,
			message: "Вы вошли в систему",
		});
	} catch (err) {
		res.status(500).json({ message: "Ошибка при авторизации ?" });
		console.log(err);
	}
};

export const getMe = async (req, res) => {
	try {
		const user = await UserModel.findOne(req.userId);

		if (!user) {
			return res.json({
				message: "Такого user не существует.",
			});
		}

		const token = jwt.sign(
			{
				id: user._id,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "30d" }
		);

		res.json({
			user,
			token,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: "Нет доступа" });
	}
};
