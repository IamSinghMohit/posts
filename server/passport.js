const passport = require("passport");
const passportJWT = require("passport-jwt");
const UserService = require("./services/user-service");
const JWTStrategy = passportJWT.Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["accessToken"];
  }
  return token;
};

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: process.env.JWT_ACCESS_TOKEN_SECRET,
    },
    async (jwtPayload, done) => {
      const { exp, _id } = jwtPayload;
      if (Date.now() > exp * 1000) {
        done("Unauthorized", false);
      }
      const user = await UserService.findUser({_id });
      if (user) {
        done(null, user);
      }
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env,
      clientSecret: process.env,
      callbackURL: "http://localhost3001/auth/google/callback",
    },
    async (req, accessToken, refreshToken, profile, cb) => {
      const defaultUser = {
        name: profile.givenName,
        email: profile.email[0].value,
        avatar: profile.photos[0].value,
        googleId: profile.id,
      };
      /* LOGING HERE  */
    }
  )
);
