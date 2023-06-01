const router = require("express").Router();
const authController = require("./controllers/auth-controller");
const passport = require("passport");
const AuthController = require("./controllers/auth-controller");
const asyncHandler = require("./middlewares/asyncHandler");
const Validate = require("./middlewares/validate");
// ----------------- AUTHENTICATION ROUTES -------------------------
router.get(
  "/auth/login/google",
  passport.authenticate("google", { scope: ["profile", "email"],session:false })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureMessage: "Cannot login",
  }),
  (req, res) => {}
);
router.post("/auth/login", asyncHandler(AuthController.login));
router.post(
  "/auth/signin",
  Validate.signinValidation,
  asyncHandler(AuthController.signin)
);
router.post("/auth/login",
  Validate.loginValidation,
  asyncHandler(AuthController.login)
)
router.get("/auth/refresh",asyncHandler(authController.refresh))
router.get('/',passport.authenticate('jwt',{session:false}),(req,res) => {
  res.json({message :'every thing is ok',
     user:req.user})
})
// ----------------- AUTHENTICATION ROUTES END -------------------------
module.exports = router;
