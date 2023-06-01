const userService = require("../services/user-service");
const tokenService = require("../services/token-service");
const UserDto = require("../dtos/user-dto");
const ErrorResponse = require("../utils/errorResponse");
const hashService = require("../services/hash-service");
const ResponseService = require("../services/response-service");

class AuthController {
  async signin(req, res, next) {
    const { email, name, password } = req.body;
    const isExist = await userService.findUser({ email });

    if (isExist) {
      return next(new ErrorResponse("Email already exists", 403));
    }

    const hashedPassword = await hashService.hasPassword(password);
    const user = await userService.createUser({
      name,
      email,
      password: hashedPassword,
    });

    await ResponseService.sendCookiesWithUser(res, user);
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await userService.findUser({ email });

    if (!user) {
      return next(new ErrorResponse("User does not exist", 404));
    }

    const verifiedUser = await hashService.comparePassword(
      password,
      user.password
    );

    if (verifiedUser) {
      ResponseService.sendCookiesWithUser(res, user);
    } else {
      return next(new ErrorResponse("Invalid credentials", 404));
    }
  }

  async refresh(req, res, next) {
    // get refresh token from cookie
    const { refreshToken: refreshTokenFromCookie } = req.cookies;

    if (!refreshTokenFromCookie) {
      return next(new ErrorResponse("invalid token", 401));
    }

    // check if token is valid
    const userData = await tokenService.verifyRefreshToken(
      refreshTokenFromCookie
    );

    // Check if token is in db
    const token = await tokenService.findRefreshToken(
      userData._id,
      refreshTokenFromCookie
    );
    if (!token) {
      return next(new ErrorResponse("invalid token", 401));
    }

    // check if valid user
    // ... it was updated

    // Generate new tokens
    const { refreshToken, accessToken } = tokenService.generateTokens({
      _id: userData._id,
    });

    // Update refresh token
    await tokenService.updateRefreshToken(userData._id, refreshToken);

    // put in cookie
    await ResponseService.sendCookieWithParameters(
      res,
      refreshToken,
      accessToken
    );
  }
}

module.exports = new AuthController();
