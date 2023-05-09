app.use(bodyParser.json());
const ReportSchema = require("../models/cpiSchema");

const report_post = (req, res) => {
  // لازم يبعتلي الريكزيست بودي فيه البيانات
  //   ولا هيبعتلي ملف جيسون
  const userData = req.body;
  const ReportSchema = new ReportSchema(userData);
  ReportSchema.save()
    .then((result) => {
      // لازم يقولي الينك الي عايز يروحله اعتقد السطر ده مش محتاجه
    })
    .catch((err) => {
      console.log(err);
    });
};

const report_get = (req, res) => {
  // محتاج يبعتلي ال اي دي بتاع الصيدلي
  //    هل هيبعتخ ملف جيسون ولا ايه
  ReportSchema.findOne({ pharmacistId: req.params.id })
    .then((result) => {
      res.json({ pharmacistreport: result });
      // res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const report_all_get = (req, res) => {
  //عملت سيند للداتا مش عارف ده صح ولا لا
  ReportSchema.find()
    .then((result) => {
      res.json({ allreports: result });
      //   res.send({ reports: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  report_all_get,
  report_get,
  report_post,
};
