const { where } = require("sequelize");
const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

const getUser = async (req, res) => {
  try {
    let data = await model.user.findAll();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Lỗi Back end");
  }
};

const getUserId = async (req, res) => {
  try {
    let { id } = req.params;

    let dataOne = await model.user.findOne({ where: { user_id: id } });

    if (dataOne) {
      res.status(200).send(dataOne);
    } else {
      res.status(400).send("User không tồn tại!");
    }
  } catch (error) {
    res.status(500).send("Lỗi Back end");
  }
};

const createUser = async (req, res) => {
  try {
    let { fullName, email, passWord } = req.body;

    let model = {
      full_name: fullName,
      email: email,
      pass_word: passWord,
    };

    let data = await model.user.create(model);

    if (data) {
      res.status(200).send("Thêm user thành công");
    }
  } catch (error) {
    res.status(500).send("Lỗi Back end");
  }
};

const updateUser = async (req, res) => {
  try {
    let { id } = req.params;

    let dataOne = await model.user.findOne({ where: { user_id: id } });

    if (dataOne) {
      let { fullName, email, passWord } = req.body;

      let model = {
        full_name: fullName,
        email: email,
        pass_word: passWord,
      };

      let data = await model.user.update(model, { where: { user_id: id } });
      if (data[0] == 1) {
        res.status(200).send("Cập nhật user thành công");
      } else {
        res.status(200).send("Không có gì mới để cập nhật");
      }
    } else {
      res.status(400).send("User không tồn tại!");
    }
  } catch (error) {
    res.status(500).send("Lỗi Back end");
  }
};

module.exports = { getUser, getUserId, createUser, updateUser };
