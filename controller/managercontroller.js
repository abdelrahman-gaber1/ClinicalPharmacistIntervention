const ManagerInformation = require("../models/cpiSchema");

const manager_post = async (req, res) => {
  // لازم يبعتلي الريكزيست بودي فيه البيانات
  //   ولا هيبعتلي ملف جيسون
  const { userName, email, phoneNumber, newPassword, confirmPassword } =
    req.body;
  const id = req.params.id;

  try {
    const managInformation = await ManagerInformation.findOneAndUpdate(
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
    if (!managInformation) {
      return res.status(404).send("User not found");
    }
    // res.render("user", { user: user }); // render the updated user
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const manager_login_post = async (req, res) => {
  try {
    const check = await ManagerInformation.findOne({ email: req.body.email });
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

const manager_signin_post = (req, res) => {
  // لازم يبعتلي الريكزيست بودي فيه البيانات
  //   ولا هيبعتلي ملف جيسون
  const ManagerInformation = new ManagerInformation(req.body);
  ManagerInformation.save()
    .then((result) => {
      // لازم يقولي الينك الي عايز يروحله
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  manager_signin_post,
  manager_login_post,
  manager_post,
};
