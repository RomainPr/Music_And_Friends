const bcrypt = require("bcrypt");
const saltRounds = 2;

const hashPassWordController = {
  hash: async (request, response, next) => {
    const passWord = request.body.password;
    bcrypt.hash(passWord, saltRounds, (error, hashPassWord) => {
      request.body.password = hashPassWord;
      next();
    });
  },
};

module.exports=hashPassWordController;