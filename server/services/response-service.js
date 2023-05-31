const UserDto = require("../dtos/user-dto");
const tokenService = require("./token-service");

class ResponseSerivice {
  async sendCookiesWithUser(res, user) {
    const { accessToken, refreshToken } = tokenService.generateTokens({
      _id: user._id,
    });

    await tokenService.findAndUpdateRefreshToken(user._id, refreshToken);

    res.cookie("refreshToken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    const userDto = new UserDto(user);
    res.status(200).json({ user: userDto });
  }

  sendCookieWithParameters(res, refreshToken, accessToken) {
    res.cookie("refreshToken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.status(200).json({ success: true });
  }
}
module.exports = new ResponseSerivice();
