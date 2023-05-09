const express = require("express");
const app = express();
const helmet = require("helmet");
// ******************************************************************************************
//مش فاهم
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// ******************************************************************************************

// const path = require("path");
// const livereload = require("livereload");
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, "public"));

// const connectLivereload = require("connect-livereload");
// app.use(connectLivereload());

// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });

// ******************************************************************************************

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// ******************************************************************************************

const managerRoutes = require("./routes/manager");
const reportRoutes = require("./routes/report");
const physicianRoutes = require("./routes/physician");
const pharmacistRoutes = require("./routes/pharmacist");

// ******************************************************************************************

const mongoose = require("mongoose");
const port = 5000;
mongoose
  .connect(
    "mongodb+srv://AbdoGaber:1519982011ABDo@clinicalpharmacistinter.oblr4z7.mongodb.net/All-Data?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(process.env.PORT || port, () => {
      //محتاج اغير المسار ده
      console.log(`Example app listening on port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// ******************************************************************************************

app.use(helmet());

// ******************************************************************************************

app.use("/manager", managerRoutes);
app.use("/report", reportRoutes);
app.use("/physician", physicianRoutes);
app.use("/pharmacist", pharmacistRoutes);

// ******************************************************************************************

const AllDrug = require("./models/cpiSchema");

// **********************************كل الادويه الموجوده في الداتا بيز*************************

app.get("/alldrugs", (req, res) => {
  AllDrug.find()
    .then((result) => {
      res.json({ alldrugs: result });
      //   res.send({ alldrug: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// لازم يبعتلي جيت ريكويست
//عملت سيند للداتا مش عارف ده صح ولا لا

// ******************************************************************************************
