const userService = require("../services/user-service");
const tokenService = require("../services/token-service");
const UserDto = require("../dtos/user-dto");
const validationService = require("../services/validation-service");
const ErrorResponse = require("../utils/errorResponse");
const hashService = require("../services/hash-service");

class AuthController {
  async signin(req, res, next) {
    const { email, name, password } = validationService.signin(req.body);
    const isExist = await userService.findUser({ email });
    if (isExist) {
      return next(new ErrorResponse("Email already exists", 403));
    } else {
      const hashedPassword = hashService.hasPassword(password);
      const user = userService.createUser({
        name,
        email,
        hashedPassword,
      });
      res.status(200).json(new UserDto(user));
    }
  }

  async singin (req,res,next) {
    const { email, password } = validationService.login(req.body);
    const user = await userService.findUser({email})
    if(!user) {
      return next(new ErrorResponse('User does not exist',404))
    }else{

    }
  }
}

module.exports = new AuthController();
