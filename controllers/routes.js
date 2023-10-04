const Routes = require('../models/Routes');

exports.getRoutes = async(req, res) => {
    try {
        const routes = await Routes.find({});
        res.status(201).json(routes);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred fetching routes",
            error: error.message
        });
    }
}

exports.createRoute = async(req, res) => {
    try {
        const route = req.body;
        const createdRoute = await Routes.create(route);
        res.status(201).json({
            message: "Route was successfully created",
            route: createdRoute
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred creating a new route",
            error: error.message
        });
    }
}