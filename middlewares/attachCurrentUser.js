const VitmaModel = require("../models/VitmaModel");


module.exports = async (req, res, next) => {
  try {
    // Ver linha 14 do arquivo isAuthenticated.js
    const loggedInUser = req.user;

    const user = await VitmaModel.findOne(
      { _id: loggedInUser._id },
      { passwordHash: 0, __v: 0 }
     
       // Excluindo o hash da senha da resposta que vai pro servidor, por segurança
    );

    if (!user) {
      // 400 significa Bad Request
      return res.status(400).json({ msg: "Usuario não  existe." });
    }

    

    req.currentUser = user;
    return next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: JSON.stringify(err) });
  }
};
