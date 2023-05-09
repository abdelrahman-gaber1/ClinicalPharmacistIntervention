app.use(bodyParser.json());
const PhysicianInformation = require("../models/cpiSchema");

const physician_get = (req, res) => {
  PhysicianInformation.find()
    //عملت سيند للداتا مش عارف ده صح ولا لا
    .then((result) => {
      res.send({ PhysicInformation: result });
      //   res.json({PhysicInformation: result})
    })
    .catch((err) => {
      console.log(err);
    });
};

const pharmacist_signin_post = (req, res) => {
  // لازم يبعتلي الريكزيست بودي فيه البيانات
  //   ولا هيبعتلي ملف جيسون
  const datauser = req.body;
  const PhysicianInformation = new PhysicianInformation(datauser);
  PhysicianInformation.save()
    .then((result) => {})
    .catch((err) => {
      console.log(err);
    });
};

const pharmacist_login_post = async (req, res) => {
  try {
    const check = await PhysicianInformation.findOne({ email: req.body.email });
    // لازم يبعتلي الريكزيست بودي فيه البيانات
    //   ولا هيبعتلي ملف جيسون
    if (check.password === req.body.password) {
      // لازم يبتعلي الصفحه الي هيروحها
      res.render("");
    } else {
      res.send("Wrong Password");
    }
  } catch (err) {
    res.send("Wrong UserName Or Password");
  }
};

const physician_post = async (req, res) => {
  // لازم يبعتلي الريكزيست بودي فيه البيانات
  //   ولا هيبعتلي ملف جيسون
  const { userName, email, phoneNumber, newPassword, confirmPassword } =
    req.body;
  const id = req.params.id;

  try {
    const PhysicInformation = await PhysicianInformation.findOneAndUpdate(
      { id: id },
      {
        userName: userName,
        email: email,
        phoneNumber: phoneNumber,
        password: newPassword,
        confirmPassword: confirmPassword,
      },
      { new: true }
    );
    if (!PhysicInformation) {
      return res.status(404).send("User not found");
    }
    // res.render("user", { user: user }); // render the updated user
    // هل عايز ابعتله ملف في المعلومات الجديده
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  physician_get,
  pharmacist_signin_post,
  pharmacist_login_post,
  physician_post,
};
