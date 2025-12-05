import mongoose from "mongoose";
import bcrypt from "bcryptjs";

let User;

export default {
  async connect(connectionString) {
    await mongoose.connect(connectionString);

    const userSchema = new mongoose.Schema({
      userName: { type: String, unique: true },
      password: String,
      favourites: [String]
    });

    User = mongoose.model("User", userSchema);
  },

  async registerUser(userData) {
    if (!userData.userName || !userData.password) {
      throw "Missing registration information";
    }

    if (userData.password !== userData.password2) {
      throw "Passwords must match";
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = new User({
      userName: userData.userName,
      password: hashedPassword,
      favourites: []
    });

    await newUser.save();

    return;
  },

  async checkUser(userData) {
    const user = await User.findOne({ userName: userData.userName });

    if (!user) throw "Unable to find user";

    const passwordMatch = await bcrypt.compare(userData.password, user.password);

    if (!passwordMatch) throw "Incorrect password";

    return user;
  },

  async getUserById(id) {
    return User.findById(id);
  },

  async addFavourite(userId, favId) {
    const user = await User.findById(userId);
    if (!user.favourites.includes(favId)) {
      user.favourites.push(favId);
    }
    await user.save();
    return user.favourites;
  },

  async removeFavourite(userId, favId) {
    const user = await User.findById(userId);
    user.favourites = user.favourites.filter((f) => f !== favId);
    await user.save();
    return user.favourites;
  },

  async getFavourites(userId) {
    const user = await User.findById(userId);
    return user.favourites;
  }
};
