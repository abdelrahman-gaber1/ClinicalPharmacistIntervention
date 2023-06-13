const fs = require("fs");
require("colors");
const dotenv = require("dotenv");
// const Alldrug = require("../../models/drugSchema");
const AllpossibleCauses = require("../../models/possibleCauses");
const dbConnection = require("../../config/database");

dotenv.config({ path: "../../config.env" });

// connect to DB
dbConnection();

// Read data
const Error = JSON.parse(fs.readFileSync("./possibleCauses.json"));

// Insert data into DB
const insertData = async () => {
  try {
    await AllpossibleCauses.create(Error);

    console.log("Data Inserted".green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// Delete data from DB
const destroyData = async () => {
  try {
    await AllpossibleCauses.deleteMany();
    console.log("Data Destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// node seeder.js -d
if (process.argv[2] === "-i") {
  insertData();
} else if (process.argv[2] === "-d") {
  destroyData();
}
