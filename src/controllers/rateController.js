const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

const addRate = async (req, res) => {
  try {
    let { id } = req.params;
    let { userId, amount, dateRate } = req.body;

    let data = await model.rate_res.create({
      user_id: userId,
      res_id: id,
      amount: amount,
      date_rate: dateRate,
    });

    if (data) {
      res.status(200).send("Đánh giá thành công");
    }
  } catch (error) {
    res.status(500).send("Lỗi back end");
  }
};

const getRateListRestaurant = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await model.restaurant.findAll({
      where: {
        res_id: id,
      },
      include: ["user_id_user_rate_res"],
    });

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Lỗi Back end");
  }
};

const getRateListUser = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await model.user.findAll({
      where: {
        user_id: id,
      },
      include: ["res_id_restaurant_rate_res"],
    });

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Lỗi Back end");
  }
};

module.exports = { addRate, getRateListRestaurant, getRateListUser };
