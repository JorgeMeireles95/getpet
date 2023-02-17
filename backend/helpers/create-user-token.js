const jwt = require("jsonwebtoken");
//gera um token para o usuário
const createUserToken = async (user, req, res) => {
  const token = jwt.sign(
    // payload data
    {
      name: user.name,
      id: user._id,
    },
    "nossosecret"//deixa o token unico
  );

  // return token
  res.status(200).json({
    message: "Você está autenticado!",
    token: token,//garante que o usuário está autenticado
    userId: user._id,
  });
};

module.exports = createUserToken;
