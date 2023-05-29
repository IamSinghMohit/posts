const router = require("express").Router();
const authController = require("./controllers/auth-controller");
const passport = require("passport");

router.get(
  "login/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "google/callback",
  passport.authenticate("google", {
    failureMessage: "Cannot login",
  }),
  (req, res) => {}
);

module.exports = router;
