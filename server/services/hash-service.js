const bcrypt = require("bcryptjs");
class HasService {
  async hasPassword(password) {
    return bcrypt.hash(password, process.env.HASH_SALT);
  }
  async comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  }
}
module.exports = new HasService()
