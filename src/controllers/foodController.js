const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

const getFood = async (req, res) => {
  // food <> food_type
  // let data = await model.food.findAll({
  //   include: ["type"], // chuỗi hoặc mảng chuỗi
  // });

  // food_type <> food
  // let data = await model.food_type.findAll({ include: ["foods"] });

  // let data = await model.like_res.findAll({ include: ["re", "user"] });

  let data = await model.user.findAll({ include: ["res_id_restaurants"] });

  res.send(data);
};

module.exports = { getFood };
