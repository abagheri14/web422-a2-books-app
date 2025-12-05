/********************************************************************************
*  WEB422 – Assignment 02
*
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
*
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
*
*  Name: Ali Bagheri        Student ID: 154404230          Date: 12/5/2025
*
********************************************************************************/

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import passport from "./auth/passport.js";
import userService from "./services/user-service.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

const HTTP_PORT = process.env.PORT || 8080;

userService
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.post("/api/user/register", async (req, res) => {
      try {
        await userService.registerUser(req.body);
        res.json({ message: "Registration successful" });
      } catch (err) {
        res.status(400).json({ message: err });
      }
    });

    app.post("/api/user/login", async (req, res) => {
      try {
        const user = await userService.checkUser(req.body);

        const payload = {
          _id: user._id,
          userName: user.userName
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET);

        res.json({ message: "Login successful", token });
      } catch (err) {
        res.status(400).json({ message: err });
      }
    });

    app.get(
      "/api/user/favourites",
      passport.authenticate("jwt", { session: false }),
      async (req, res) => {
        const favourites = await userService.getFavourites(req.user._id);
        res.json(favourites);
      }
    );

    app.put(
      "/api/user/favourites/:id",
      passport.authenticate("jwt", { session: false }),
      async (req, res) => {
        const updated = await userService.addFavourite(req.user._id, req.params.id);
        res.json(updated);
      }
    );

    app.delete(
      "/api/user/favourites/:id",
      passport.authenticate("jwt", { session: false }),
      async (req, res) => {
        const updated = await userService.removeFavourite(req.user._id, req.params.id);
        res.json(updated);
      }
    );

    app.listen(HTTP_PORT, () => console.log(`API listening on ${HTTP_PORT}`));
  })
  .catch((err) => console.log(err));
