<<<<<<< HEAD
const FamiliaModel = require("../models/familia.model");
const VitimaModel = require("../models/Vitima.model");
=======
const VitmaModel = require("../models/VitmaModel");

>>>>>>> 1c971bf20163ea4d5d9db2cc7ec2b2fa6bb21152

module.exports = async (req, res, next) => {
  try {
    // Ver linha 14 do arquivo isAuthenticated.js
    const loggedInUser = req.user;

<<<<<<< HEAD
    const user = await FamiliaModel.findOne(
=======
    const user = await VitmaModel.findOne(
>>>>>>> 1c971bf20163ea4d5d9db2cc7ec2b2fa6bb21152
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
