const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const ApiError = require("./utils/ApiError");

const globalerror = require("./Middleware/errorMiddleware");

dotenv.config({ path: "config.env" });

const app = express();

app.use(express.json());

const dbconniction = require("./config/database");

dbconniction();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Routes
const mountRoutes = require("./routes/index");

// Mount Routes
mountRoutes(app);

// Enable other domains to access your application
app.use(cors());
app.options("*", cors());

if (process.env.MODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode : ${process.env.MODE_ENV}`);
}

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

app.use(helmet());

app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find this route: ${req.originalUrl}`, 400));
});

// Global error handling middleware
app.use(globalerror);

// Handle rejection outside express
process.on("unhandledRejection", (err) => {
  console.error(`unhandledRejection Error: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`shutting down .......`);
    process.exit(1);
  });
});
