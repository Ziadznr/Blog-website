const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Generate a JWT token
const generateToken = (user) => {
    return jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
};

// Register a new user
exports.register = async(req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const user = new User({ username, email, password });
        await user.save();

        const token = generateToken(user);
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
};

// Login an existing user
exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials" });

        const token = generateToken(user);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error });
    }
};