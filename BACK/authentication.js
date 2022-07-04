require("dotenv").config();
const jwt = require("jsonwebtoken");
const pool = require("./app/database/client");

const refreshTokens = [];

const authentication = {
  generateToken: (request, response, next) => {
    const email = request.body["email"];
    const token = jwt.sign({ email: email }, process.env.TOKEN_SECRET, {
      expiresIn: "1800s",
    });
    const refreshToken = jwt.sign(
      { email: email },
      process.env.TOKEN_REFRESH_SECRET,
      { expiresIn: "1000s" }
    );
    refreshTokens.push(refreshToken);
    console.log(request.user)
    response.json({ token: token, refreshToken: refreshToken, id:request.user.id,role:request.user.role,firstname:request.user.firstname });
  },
  verifyToken: (request, response, next) => {
    const authHeader = request.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return response.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
      if (error) {
        console.trace(error);
        return response.sendStatus(403);
      } else {
        request.user = decoded;
        next();
      }
    });
  },
  findUser: async (request, response, next) => {
    try {
      const role = request.params.role;
      const email = request.body["email"];
      const password = request.body["password"];
      const userExist = await pool.query(
        `SELECT * FROM "${role}" WHERE "email"=$1;`,
        [email]
      );

      if (
        userExist.rows[0] !== undefined &&
        userExist.rows[0].password === password
      ) {
        request.user=userExist.rows[0]
        next();
      } else {
        response.status(401);
        response.send("Username or password incorrect");
        throw new Error();
      }
    } catch (error) {
      console.trace(error);
    }
  },
};

module.exports = authentication;
