const PharmacistInformation = require("../models/cpiSchema");

const pharmacist_post = async (req, res) => {
  // لازم يبعتلي الريكزيست بودي فيه البيانات
  //   ولا هيبعتلي ملف جيسون
  const { userName, email, phoneNumber, newPassword, confirmPassword } =
    req.body;
  const id = req.params.id;

  try {
    const pharmInformation = await PharmacistInformation.findOneAndUpdate(
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
    if (!pharmInformation) {
      return res.status(404).send("User not found");
    }
    // res.render("user", { user: user }); // render the updated user
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const pharmacist_login_post = async (req, res) => {
  try {
    const check = await PharmacistInformation.findOne({
      email: req.body.email,
    });
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

const pharmacist_signin_post = (req, res) => {
  // لازم يبعتلي الريكزيست بودي فيه البيانات
  //   ولا هيبعتلي ملف جيسون
  const PharmacistInformation = new PharmacistInformation(req.body);
  PharmacistInformation.save()
    .then((result) => {
      // لازم يقولي الينك الي عايز يروحله
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  pharmacist_post,
  pharmacist_login_post,
  pharmacist_signin_post,
};
