const managerRoutes = require("./manager");
const reportRoutes = require("./report");
const physicianRoutes = require("./physician");
const pharmacistRoutes = require("./pharmacist");
const drugRoutes = require("./drug");
const authRoutes = require("./authRoutes");

const mountRoutes = (app) => {
  app.use("/api/v1/manager", managerRoutes);
  app.use("/api/v1/report", reportRoutes);
  app.use("/api/v1/physician", physicianRoutes);
  app.use("/api/v1/pharmacist", pharmacistRoutes);
  app.use("/api/v1/alldrugs", drugRoutes);
  app.use("/api/v1/auth", authRoutes);
};

module.exports = mountRoutes;
