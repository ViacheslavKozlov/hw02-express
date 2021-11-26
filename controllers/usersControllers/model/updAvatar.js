/* eslint-disable quotes */
/* eslint-disable semi */
const fs = require("fs");
const path = require("path");
const { Unauthorized } = require("../../../helpers/errors.js");
// const Jimp = require("jimp");

const { usersServices } = require("../../../services");

const updAvatar = async (req, res, next) => {
  const { _id } = req.user;
  // console.log(_id);
  const { path: TMP_DIR, originalname } = req.file;
  const [fileExt] = originalname.split(".").reverse();
  const fileName = `${_id}.${fileExt}`;
  const DEST_DIR = path.join(__dirname, "../../", "public/avatars", fileName);

  if (!_id) {
    next(new Unauthorized("Not authorized"));
  }

  try {
    // const fileName = await Jimp.read(TMP_DIR);
    // await fileName.resize(250, 250).write(TMP_DIR);
    await fs.rename(TMP_DIR, DEST_DIR, () => {});
    const avatar = path.join("avatars", fileName);
    const data = await usersServices.updAvatarField(_id, avatar);
    await res.json({
      status: "OK",
      code: 200,
      avatarURL: data
    });
  } catch (error) {
    await fs.unlink(TMP_DIR, () => {});
    next(error);
  }
};
module.exports = updAvatar;
