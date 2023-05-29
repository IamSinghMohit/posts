const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const cookieExtractor = function (req) {
  const token = null;
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
    (jwtPayload, done) => {
      console.log(jwtPayload);

      /* if (Date.now() > expiration) {
        done("Unauthorized", false);
      } */

      done(null, jwtPayload);
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
        email:profile.email[0].value,
        avatar:profile.photos[0].value,
        googleId:profile.id
      };
      /* LOGING HERE  */
    }
  )
);
