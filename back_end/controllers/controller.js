const { Job, User } = require("../models/index");
const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { Op } = require("sequelize");

class Controller {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      // console.log(email,password)

      if (!email || !password) {
        throw {
          name: "LoginError",
        };
      }

      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      // console.log(user);
      if (!user) {
        throw {
          name: "LoginError",
        };
      }

      const validate = comparePassword(password, user.password); //validasi password
      // console.log(validate)

      if (!validate) {
        throw {
          name: "LoginError",
        };
      }

      const token = createToken({
        id: user.id,
        email: user.email,
        role: user.role,
      });
      // console.log(token)

      res.status(200).json({
        access_token: token,
        email: user.email,
        role: user.role,
        id: user.id,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async register(req, res, next) {
    try {
      // console.log(req.body);
      const { email, password, username } = req.body;
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      // console.log(user, "ini user");

      const register = await User.create({
        email,
        password,
        username,
      });
      // console.log(register, "ini register");
      res.status(201).json({
        id: register.id,
        email: register.email,
        username: register.username,
      });
    } catch (err) {
      console.log(err);
      /*
            jika inputnya salah makan akan show   res.status(400).json(err.errors[0].message)
             yang messagenya ada di validation yg ada di model
            */
      if (err.email === "SequelizeValidationError") {
        res.status(400).json(err.errors[0].message);
      } else {
        // console.log(err);
        next(err);
        // res.status(500).json({
        //     message: "Internal Server Error"
        // })
      }
    }
  }

  static async jobList(req, res, next) {
    try {
      let { page, size, filterName } = req.query;
      console.log(filterName);
      if (!page) page = 1;
      if (!size || size > 4) size = 4;

      let option = {
        order: [["id", "ASC"]],
      };
      option.offset = (page - 1) * size;
      option.limit = size;
      //   option.where = { status: "active" };
      if (filterName) {
        console.log(filterName, "<<<<<< filtename nih");
        option.where.name = {
          [Op.iLike]: `%${filterName}%`,
        };
      }

      console.log(option, "<<< option");
      // const { count } = await Movie.findAll({ where: option.where });
      const { count, rows } = await Job.findAndCountAll(option);

      res.status(200).json({
        statusCode: 200,
        totalItems: count,
        data: { job: rows },
        totalPages: Math.ceil(count / size),
        currentPage: page,
      });
    } catch (error) {
      next(error);
    }
  }

  static async jobById(req, res, next) {
    try {
      let job = await Job.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(job);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;