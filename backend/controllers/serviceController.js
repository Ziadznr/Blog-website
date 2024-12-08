const Service = require("../models/Service");

// Get all services
exports.getAllServices = async(req, res) => {
    try {
        const services = await Service.find().sort({ createdAt: -1 });
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: "Error fetching services", error });
    }
};

// Create a new service
exports.createService = async(req, res) => {
    try {
        const { title, description, image } = req.body;

        const service = new Service({ title, description, image });
        await service.save();

        res.status(201).json(service);
    } catch (error) {
        res.status(500).json({ message: "Error creating service", error });
    }
};

// Update a service
exports.updateService = async(req, res) => {
    try {
        const { id } = req.params;
        const updatedService = await Service.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedService) return res.status(404).json({ message: "Service not found" });

        res.status(200).json(updatedService);
    } catch (error) {
        res.status(500).json({ message: "Error updating service", error });
    }
};

// Delete a service
exports.deleteService = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedService = await Service.findByIdAndDelete(id);

        if (!deletedService) return res.status(404).json({ message: "Service not found" });

        res.status(200).json({ message: "Service deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting service", error });
    }
};