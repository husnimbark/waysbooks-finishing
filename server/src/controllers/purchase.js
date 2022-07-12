const { purchase, } = require("../../models");

exports.getPurchases = async (req, res) => {
  try {
    const data = await purchase.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success...",
      data,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getPurchase = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await purchase.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success...",
      data,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.addPurchase = async (req, res) => {
  try {
    const newPurchase = await purchase.create(req.body);

    res.send({
      status: "success...",
      data: {
        id: newPurchase.id,
        name: newPurchase.name,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

