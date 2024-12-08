const express = require("express");
const { getAllTeams, createTeam, getTeamById, updateTeam, deleteTeam } = require("../controllers/teamController");

const router = express.Router();

// Routes
router.get("/", getAllTeams); // Fetch all teams
router.post("/", createTeam); // Create a new team
router.get("/:id", getTeamById); // Fetch a single team by ID
router.put("/:id", updateTeam); // Update a team by ID
router.delete("/:id", deleteTeam); // Delete a team by ID

module.exports = router;