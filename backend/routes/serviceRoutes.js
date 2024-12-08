const express = require("express");
const {
    getAllServices,
    createService,
    updateService,
    deleteService,
} = require("../controllers/serviceController");

const router = express.Router();

// Get all services
router.get("/", getAllServices);

// Create a new service
router.post("/", createService);

// Update a service by ID
router.put("/:id", updateService);

// Delete a service by ID
router.delete("/:id", deleteService);

module.exports = router;