/* eslint-disable quotes */
/* eslint-disable semi */
const gravatar = require("gravatar");
const { User } = require("../../../schema");
const { Conflict } = require("../../../helpers/errors");
const { nanoid } = require("nanoid");
const sendEmail = require("../../../helpers/sendEmail");

const singup = async (req, res, next) => {
  const { email, password } = req.body;
  const avatar = gravatar.url(email, { s: 200 }, false);
  try {
    const data = await User.findOne({ email });
    if (data) {
      return new Conflict("Email in use");
    }

    const token = nanoid();
    const user = new User({
      email,
      verifyToken: token,
      avatarURL: avatar
    });
    user.setPassword(password);
    await user.save();

    const msg = {
      to: email,
      subject: "Registration confirmation",
      html: `<a href='http:lockalhost:3030/api/users/verify/${token}>Comfirm email</a>`
    };
    await sendEmail(msg);

    res.status(201).json({
      status: "created",
      code: 201,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

module.exports = singup;
