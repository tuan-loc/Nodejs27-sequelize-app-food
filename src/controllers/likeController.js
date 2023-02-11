const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

const like = async (req, res) => {
  try {
    let { id } = req.params;
    let { userId, dateLike } = req.body;

    let data = await model.like_res.create({
      user_id: userId,
      res_id: id,
      date_like: dateLike,
    });

    if (data) {
      res.status(200).send("Đã like thành công");
    }
  } catch (error) {
    res.status(500).send("Lỗi back end");
  }
};

const unLike = async (req, res) => {
  try {
    let { id } = req.params;
    let { userId } = req.body;

    let dataOne = await model.like_res.findOne({
      where: { res_id: id, user_id: userId },
    });

    if (dataOne) {
      await model.like_res.destroy({
        where: { user_id: userId, res_id: id },
      });
      res.status(200).send("Đã unlike");
    } else {
      res.status(400).send("Nhà hàng không tồn tại!");
    }
  } catch (error) {
    res.status(500).send("Lỗi Back end");
  }
};

const getLikeListRestaurant = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await model.restaurant.findAll({
      where: {
        res_id: id,
      },
      include: ["user_id_users"],
    });

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Lỗi Back end");
  }
};

const getLikeListUser = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await model.user.findAll({
      where: {
        user_id: id,
      },
      include: ["res_id_restaurants"],
    });

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Lỗi Back end");
  }
};

module.exports = { like, unLike, getLikeListRestaurant, getLikeListUser };
