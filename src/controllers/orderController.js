const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

const addOrder = async (req, res) => {
  try {
    let { userId, foodId, amount, code } = req.body;

    let data = await model.order.create({
      user_id: userId,
      food_id: foodId,
      amount: amount,
      code: code,
    });

    if (data) {
      res.status(200).send("Order thành công");
    }
  } catch (error) {
    res.status(500).send("Lỗi back end");
  }
};

module.exports = { addOrder };
