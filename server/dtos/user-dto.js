class UserDto {
  id;
  name;
  avatar;
  createdAt;
  updatedAt;

  constructor(user) {
    this.id = user._id;
    this.name = user.name;
    this.avatar = user.avatar || "";
    this.activated = user.activated;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}

module.exports = UserDto;
