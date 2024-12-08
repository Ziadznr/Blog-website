// controllers/teamController.js

const Team = require("../models/Team");

// Get all teams
const getAllTeams = async(req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch teams", error });
    }
};

// Create a new team
const createTeam = async(req, res) => {
    try {
        const newTeam = new Team(req.body);
        const savedTeam = await newTeam.save();
        res.status(201).json(savedTeam);
    } catch (error) {
        res.status(400).json({ message: "Failed to create team", error });
    }
};

// Get team by ID
const getTeamById = async(req, res) => {
    try {
        const team = await Team.findById(req.params.id);
        if (!team) return res.status(404).json({ message: "Team not found" });
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch team", error });
    }
};

// Update team by ID
const updateTeam = async(req, res) => {
    try {
        const updatedTeam = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTeam) return res.status(404).json({ message: "Team not found" });
        res.status(200).json(updatedTeam);
    } catch (error) {
        res.status(400).json({ message: "Failed to update team", error });
    }
};

// Delete team by ID
const deleteTeam = async(req, res) => {
    try {
        const deletedTeam = await Team.findByIdAndDelete(req.params.id);
        if (!deletedTeam) return res.status(404).json({ message: "Team not found" });
        res.status(200).json({ message: "Team deleted" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete team", error });
    }
};

module.exports = {
    getAllTeams,
    createTeam,
    getTeamById,
    updateTeam,
    deleteTeam,
};